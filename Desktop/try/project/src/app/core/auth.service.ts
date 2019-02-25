import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators'

//this last one is the fixer for <User>
//import { User } from 'firebase';
import {User} from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable <User>

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null)
      }
    }))
   }

   emailSignIn(email: string, password: string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then( () => console.log("You have successfully signed in.") )
     .catch(error => console.log(error.message))
   }

   emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user => this.updateUserData(user))
    .then( () => console.log("Welcome, your account has been created.") )
    .catch(error => console.log(error.message))
  }

   signOut() {
     return this.afAuth.auth.signOut()
     .then( () => {
       this.router.navigate(['/'])
     })
   }

   private updateUserData(user){
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)
     const data: User ={
       uid: user.uid,
       email: user.email || null,
       displayName: user.displayName,
       photoURL: user.photoURL
     }
     return userRef.set(data, {merge:true})
    }
}
