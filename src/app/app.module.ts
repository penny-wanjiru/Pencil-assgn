import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditorComponent } from './editor/editor.component';

//  Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

/* Firebase services */
import { FirestoreService } from 'src/app/shared/firestore.service';
import { AuthService } from 'src/app/shared/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    FirestoreService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
