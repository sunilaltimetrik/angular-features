import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'practice-template-driven-form',
  templateUrl: './practice-template-driven-form.component.html',
  styleUrls: ['./practice-template-driven-form.component.css']
})
export class PracticeTemplateDrivenFormComponent implements OnInit {
  categoryObj = [
    {id: 1, value: 'Development'},
    {id: 2, value: 'Testing'},
    {id: 3, value: 'Other'}

  ]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formData: NgForm){
    console.log('Form Data = ' + formData.value);
  }
}
