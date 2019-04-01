import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, Action, DocumentSnapshotDoesNotExist, DocumentSnapshotExists } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: firebase.User = null;

  constructor(private af: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {

    af.authState.subscribe(state => this.authState = state);
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.af.auth.signInWithPopup(provider);
  }

  // anonymousLogin() {
  //   return this.af.auth.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous,
  //   })
  //     .then(() => console.log("successful login"))
  //     .catch(error => console.log(error));
  // }
}
