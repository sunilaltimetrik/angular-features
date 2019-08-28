import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-accordian',
  templateUrl: './my-accordian.component.html',
  styleUrls: ['./my-accordian.component.css']
})
export class MyAccordianComponent {

  // @Input() headerValue: boolean;
  // @Input() bodyValue: boolean;
  @Input() toggleValue: boolean = false;
  
  accToggle(){
    this.toggleValue = !this.toggleValue;
  }
}
