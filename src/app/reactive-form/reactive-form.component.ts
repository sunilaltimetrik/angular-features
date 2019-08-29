import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    })
  })
  constructor() { }

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
  
}
