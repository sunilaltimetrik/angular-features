import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { CustomFormFieldValidators } from '../common/custom-form-field.validators';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

//Service or Asynchronous validator "CustomFormFieldValidators" will pass as ThIRD Parameter in FORMGROUP
  reactiveForm = new FormGroup({

    userName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        // Custom Validators
        CustomFormFieldValidators.spaceNotAllowed
      ],
      // Async Custom Validators 3rd parameter
      CustomFormFieldValidators.uniqueName
    ),
    password: new FormControl('',
      Validators.required,
      // Async Custom Validators 3rd parameter
      CustomFormFieldValidators.uniquePassword),

    // Nested FormGroup
    address: new FormGroup({
      streetName: new FormControl('', Validators.required),
      doorNo: new FormControl('', [Validators.required, CustomFormFieldValidators.spaceNotAllowed])
    }),

    // Form Array
    topics: new FormArray([])
  })

  // Using ***** FormBuilder ***** Approach :)
  // constructor(private fb: FormBuilder) { 
  //   this.reactiveForm = fb.group({
  //     userName: ['',  
  //       Validators.required,
  //       Validators.minLength(5),
  //       CustomFormFieldValidators.spaceNotAllowed,
  //     ],
      
  //     password: ['',
  //       Validators.required,
  //       CustomFormFieldValidators.uniquePassword
  //     ],

  //     address: fb.group({
  //       streetName: ['', Validators.required],
  //       doorNo: ['', Validators.required, CustomFormFieldValidators.spaceNotAllowed]
  //     }),

  //     topics: fb.array([])
  //   })
  // }

  ngOnInit() {
  }
   
  get userName() {
    return this.reactiveForm.get('userName');
  }
  get password() {
    return this.reactiveForm.get('password');
  }
  get streetName() {
    return this.reactiveForm.get('address.streetName');
  }
  get doorNo() {
    return this.reactiveForm.get('address.doorNo');
  }
  login(){
    this.reactiveForm.setErrors({
      invalidLogin: true
    });
    console.log(this.reactiveForm.value);
  }

  // Form Array
  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    // (this.reactiveForm.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics(){
    return this.reactiveForm.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
    let topicIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIndex);
  }
}

