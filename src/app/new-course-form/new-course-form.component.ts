import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  formBuilder;
 /*  formBuilder = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
    }),
    topics: new FormArray([])
  }); */


  constructor(fb: FormBuilder) {
   this.formBuilder = fb.group({
     name: ['', Validators.required],
     contact: fb.group({
       email: [],
       phone: []
     }),
     topics : fb.array([])
   });
  }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
     this.topics
     .push(new FormControl(topic.value));

     topic.value = '';
  }

  get topics() {
   return this.form.get('topics') as FormArray;
  }

  removeTopic (topic: FormControl) {
     const index = this.topics.controls.indexOf(topic);
     this.topics.removeAt(index);
  }

}
