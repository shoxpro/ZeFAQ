import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()]
})

export class LoginComponent {
  @HostBinding('@moveIn') role = '';

  error: any;
  auth: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

   /* this.afAuth.auth.signInWithPopup(auth => {
    if (auth) {
      this.router.navigateByUrl('/members');
    }
  });
*/
  }
/*
 loginFb() {
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup,
  }).then(
      (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      this.error = err;
    });
}*/


loginGoogle() {
  this.afAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  ).then(
    (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      this.error = err;
    });
}
}

