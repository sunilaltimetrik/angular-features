import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  checkboxObj = [
    {id: 1, value: 'Subscribe'},
    {id: 2, value: 'Un-subscribe'},
    {id: 3, value: 'Normal'}

  ];
  genders = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'},
    {id: 3, value: 'Other'}

  ];
  gendersObj = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'},
    {id: 3, value: 'Other'}

  ]
  radiObj = [
    {id: 1, value: 'UI Developer'},
    {id: 2, value: 'Java Developer'}
  ]

  constructor() { }

  ngOnInit() {
  }

  log(fControlProperties1 : NgForm){
    console.log(fControlProperties1.value);
  }
  onSubmit(formData : NgForm){
    console.log(formData.value);
  }
}
