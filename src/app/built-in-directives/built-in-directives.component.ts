import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
  // ngClass data
  primary_value : boolean = false;
  btn_value : boolean = true;
  // ngStyle
  bgColor : boolean;

  dirData = {
    result1: '200',
    result2: '300',
    result3: '400'
  };
  loopData = [1,'sunil', 'soni', 2];
  myArray =[];
  viewMode: string = 'grid';
  constructor() { }

  ngOnInit() {
  }
  changeToGridView(){

    this.viewMode = 'grid';
  }
  changeToListView(){
    this.viewMode = 'list';
  }
  changeToNormalView(){
    this.viewMode = 'normal';
  }

  loadArrayData(){
    this.myArray =[
      {id: 1, value: 'sunil'},
      {id: 2, value: 'Kumar'},
      {id: 3, value: 'Soni'},
    ]
  }
  addElement(){
    this.myArray.push({id: 4, value: 'Ford'});
  }
  // Protect data Load and creating DOM again & again by using TrackBy in Loop for Special for Bigger List
  trackArrayList(index, data){
   return data ? data.id : undefined;
  }

  styleChange(){
    // ngClass value
    this.primary_value = !this.primary_value;
    this.bgColor = !this.bgColor;
    this.btn_value = true ;
    
  }
}
