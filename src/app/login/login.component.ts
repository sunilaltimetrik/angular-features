import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service'
import { HeaderService } from '../header.service';
import { from } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isChecked: boolean=false; 
  data: Object;
  authors: any;
  email: string="ssoni@altimetrik.com";
  pipeText: string ="A pipe takes in data as input and transforms it to a desired output. In this page, you'll use pipes to transform a component's birthday property into a human-friendly date."
  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];




  constructor(private appService: AppService,
              private headerService: HeaderService,
              private router: Router) { }


  
  // formData = this.fb.group({
  //   uid: ['', Validators.required],
  //   pwd: ['', Validators.required],
  // });

  liginForm = new FormGroup({
    uid: new FormControl(''),
    pwd: new FormControl('')
 });



  onSubmit(){
    this.router.navigate(['/main-dashboard']);
    // console.warn(this.liginForm.value);
    // this.appService.loginService().subscribe(data =>{
    //   this.data = data;
    //   console.warn(this.data);
    // })
    // this.appService.loginService();
  }

  changeCity(e) {
    alert(e.target.value);
  }
// Table data
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.headerService.setTitle('Login');
    this.appService.setTitle('custom Title Name');
    this.authors = this.headerService.getAuthors();
  } 

  // udemy test

  // Tow way data binding
  emailFun(){
    console.log("email : " + this.email);
  }
  
  // start Rate
  rateMe(){
     this.isChecked = !this.isChecked ;
  }
}
