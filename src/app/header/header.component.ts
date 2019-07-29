import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '';
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });
  }

}
