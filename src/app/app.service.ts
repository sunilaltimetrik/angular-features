import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {BehaviorSubject} from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public title1 = new BehaviorSubject('Title');

  constructor(private http: HttpClient) { }
  loginService(){
    var mydata= {
      "fn":"Uma",
      "email":"Uma@gmail.com"
    }
    // console.warn('login service called');
    // return this.http.get('http://localhost:1234/employee/all');

    const req = this.http.post('http://localhost:1234/employee/empLogin', {
      mydata
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }




  setTitle(title1) {
      debugger;
    this.title1.next(title1);
  }
}
