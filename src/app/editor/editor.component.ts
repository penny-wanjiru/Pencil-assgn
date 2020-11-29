import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
declare const MediumEditor: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
editor: any;
  @ViewChild('editable', { static: true }) editable: ElementRef;
constructor() { }
ngAfterViewInit(): void {
    this.editor = new MediumEditor(this.editable.nativeElement);
  }
}
