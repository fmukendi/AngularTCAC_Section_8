import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl,
   Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /* form = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  }); */

 /*  form = new FormGroup({
    username : new FormControl('', Validators.required,
    UsernameValidators.shouldBeUnique),
    password : new FormControl('', Validators.required),
  }); */

  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl('', Validators.required,
      UsernameValidators.shouldBeUnique),
      password : new FormControl('', Validators.required)
    })
  });


  /* form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password : new FormControl('', Validators.required),
  }); */

login() {
  /* const isValid = authService.login(this.form.value);
  if (!isValid) {
     this.form.setErrors({
       invalidLogin : true
     });
     // this.username.setErrors
  } */
  this.form.setErrors({
    invalidLogin : true
  });
}

  get username() {
    // return this.form.get('username');
    return this.form.get('account.username');
  }

  constructor() { }

  ngOnInit() {
  }

}
