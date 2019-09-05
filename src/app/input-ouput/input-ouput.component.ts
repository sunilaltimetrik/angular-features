import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ouput',
  templateUrl: './input-ouput.component.html',
  styleUrls: ['./input-ouput.component.css']
})
export class InputOuputComponent implements OnInit {
  @Input() isSelectedStar : boolean;
  @Input() isSelectedColor: boolean;

  @Output('aliasChange') change = new EventEmitter();
  displayMeg = "default MSG";
  constructor() { }

  ngOnInit() {
  }

  starRate(){
    this.isSelectedStar = !this.isSelectedStar;
    this.isSelectedColor = false;
    this.change.emit(this.isSelectedStar);
  }
}
export interface ISelectedStarValue{
  // newValue: boolean;
}