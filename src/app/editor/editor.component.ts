import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare const MediumEditor: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  editor: any;
  @ViewChild('editable', { static: true }) editable: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.editor = new MediumEditor(this.editable.nativeElement);
  }

}
