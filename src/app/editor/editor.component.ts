import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/firestore.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

declare const MediumEditor: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})


export class EditorComponent implements AfterViewInit {
  editor: any;
    @ViewChild('editable', { static: true }) editable: ElementRef;

  private userid: BehaviorSubject<string> = new BehaviorSubject(null);
  private subscriptions: Subscription[] = [];

  constructor(
    private firestoreService: FirestoreService,
    private firebaseAuthService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit() {

   //  Subscribe to user changes
   this.subscriptions.push(
     this.firebaseAuthService.getUser()
       .subscribe(user => {
         if (!user || !user.uid) {
           this.userid.next(null);
           this.router.navigate(['/login']);
           return;
         }
         this.userid.next(user.uid);
       })
   );
 }

 public ngAfterViewInit(): void {
   this.editor = new MediumEditor(this.editable.nativeElement, {
     toolbar: {
       buttons: [
         'bold', 'italic', 'underline', 'superscript', 'anchor', 'pre', 'indent', 'outdent', 'orderedlist',
         'unorderedlist', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'removeFormat'
       ]
     },
     paste: {
       forcePlainText: false,
       cleanPastedHTML: true,
       cleanReplacements: true,
       cleanTags: ['script', 'meta', 'frame', 'iframe', 'video', 'audio']
     }
   });

   this.subscriptions.push(

     //  Subscribe to user ID changes and load document if changed
     this.userid.pipe(filter(x => !!x))
       .subscribe(userid => {

         //  Load saved document just once
         const doc = this.firestoreService.loadDocument(userid)
           .subscribe(result => {
             if (result && result['content'])
               this.editor.setContent(result['content'])
             else
               this.editor.setContent('', 0)
             this.editable.nativeElement.focus();
             doc.unsubscribe();
           },
             error => {
               alert('Error', error.code || 'Issue loading document!');
               doc.unsubscribe();
             });
       },
         error => {
           console.log('Error', error.code || 'Unable to access Google Firebase!');
         }),

     //  save real time changes to firebase
     Observable.create(observer =>
       this.editor.subscribe('editableInput', (event) => observer.next(event))
     )
       .pipe(
         debounceTime(500)
       )
       .subscribe(() => {
         this.latex();
         this.saveDocument();
       })
   );
 }

 private latex(): void {
   let content = this.editor.getContent(0);
   let match = content.match(/\$.*?\$/g);
   let newContent = match.replace(/\$/g, '');
   this.editor.setContent(newContent);
 }

 private saveDocument(): void {
    this.firestoreService.saveDocument(this.userid.getValue(), this.editor.getContent(0))
      .catch(err => {
        alert('Error saving document', err.code);
      })
  }
}
