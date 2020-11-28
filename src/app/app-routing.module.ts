import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component'; // Add this
import { EditorComponent } from './editor/editor.component'; // Add this


const routes: Routes = [
  { path: '', component: LogInComponent },              // Add this
  { path: 'editor', component: EditorComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
