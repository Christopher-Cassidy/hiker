import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, Action, DocumentSnapshotDoesNotExist, DocumentSnapshotExists } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { copyAnimationEvent } from '@angular/animations/browser/src/render/shared';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User = null;

  constructor(private af: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {

    af.authState.subscribe(user => {
      this.user = user;
      console.log("[AuthService] Auth state changed", user);
    });
  }

  login() {
    const provider = new firebase.auth.EmailAuthProvider()
    this.af.auth.signInWithPopup(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.af.auth.signInWithPopup(provider)
      .then(credentials => {
        // Add db record for user with display name
        console.log("[AuthService] Google login success", credentials.user.displayName);
      },
        reason => {
          console.error("[AuthService] Google login failed", reason);
        }
      );
  }

  register(displayName: string, email: string, password: string) {
    this.af.auth.createUserWithEmailAndPassword(email, password)
      .then(credentials => {
        // Add db record for user with display name
        console.log("[AuthService] registration complete", credentials);
      },
        reason => {
          console.error("[AuthService] Register Failed", { email: email, reason: reason });
        }
      );
  }

  logout(): void {
    this.af.auth.signOut();
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
