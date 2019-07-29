import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: "root"})
export class HeaderService {
  public title = new BehaviorSubject('Title');
  
  constructor() { }

  setTitle(title) {
    this.title.next(title);
  }

  getAuthors(){
    return (['Author1', 'Author2', 'Author3']);
  }
}