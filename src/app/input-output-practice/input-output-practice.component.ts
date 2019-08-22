import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-practice',
  templateUrl: './input-output-practice.component.html',
  styleUrls: ['./input-output-practice.component.css']
})
export class InputOutputPracticeComponent {
  @Input() isLiked: boolean;
  @Input() likesCount: number;
  // @Output() likesChange = new EventEmitter()
  @Output('likesChange') change = new EventEmitter();


  onClickStart(){
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
    // Need to work on Practice Part
    this.change.emit(this.isLiked);
  }


}
