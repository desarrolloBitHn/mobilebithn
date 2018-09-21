import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseAuth} from 'firebase/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  singInWithEmail(credencial) {
    console.log(credencial);

    return this.afAuth.auth.signInWithEmailAndPassword(credencial.email, credencial.password);
  }



  sendResetPasswordToEmail(_email){
    return this.afAuth.auth.sendPasswordResetEmail(_email).then(function(_datos) {
      return "successful";
    }).catch(function(error) {
      console.log("Error: " + error);
      return "error";
    });
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  get instance() {
    return this.afAuth.auth;
  }

  get _user(): firebase.User {
    return this.authenticated ? this.user : null;
  }

  get authenticated(): boolean {
    return this.user !== null;
  }





}
