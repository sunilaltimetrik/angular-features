import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isChecked: boolean=false; 
  data: Object;
  authors: any;
  email: string="ssoni@altimetrik.com";
  pipeText: string ="A pipe takes in data as input and transforms it to a desired output. In this page, you'll use pipes to transform a component's birthday property into a human-friendly date."
  // City Names For drop down
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  constructor(private appService: AppService, private headerService: HeaderService) { }

    ngOnInit() {
      debugger;
      this.headerService.setTitle('Login');
      this.appService.setTitle('custom Title Name');
      this.authors = this.headerService.getAuthors();
    }

    // Tow way data binding
    emailFun(){
      console.log("email : " + this.email);
    }
    
    // start Rate
    rateMe(){
       this.isChecked = !this.isChecked ;
    }

    //Drop Down
    changeCity(e) {
      alert(e.target.value);
    }
}
