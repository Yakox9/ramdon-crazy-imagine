import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private WhoIsActive: Number=0;

  constructor() { }

  ngOnInit() {
  }

  changeActive(isActive: Number){
    this.WhoIsActive=isActive;
  }

}
