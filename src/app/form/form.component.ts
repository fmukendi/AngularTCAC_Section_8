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

  form = new FormGroup({
    username : new FormControl('', Validators.required,
    UsernameValidators.shouldBeUnique),
    password : new FormControl('', Validators.required),
  });

  /* form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password : new FormControl('', Validators.required),
  }); */

  get username() {
    return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
