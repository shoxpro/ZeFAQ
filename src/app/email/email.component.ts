import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent {

  state = '';
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
 /* this.afAuth.auth.subscribe(auth => {
    if (auth) {
      this.router.navigateByUrl('/members');
    }
  });
  */
}


onSubmit(formData) {
  if (formData.valid) {
    console.log(formData.value);
    firebase.auth().signInWithEmailAndPassword(formData.value.email, formData.value.password)
    .then(
      (success) => {
      console.log(success);
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    });
  }
}

}
