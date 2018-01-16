import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
})
export class SignupComponent {

  @HostBinding('@moveIn') role = '';

  state = '';
  error: any;
  email: string ;
  password: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
    }
  }

}
