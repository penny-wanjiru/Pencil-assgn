import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private medium: string = 'posts';

  constructor(private db: AngularFirestore) { }

  public loadDocument(userid: string) {
    return this.db.collection(this.medium).doc(userid).valueChanges();
  }

  public saveDocument(userid: string, content: string) {
    return this.db.collection(this.medium).doc(userid).set({ content });
  }
}
