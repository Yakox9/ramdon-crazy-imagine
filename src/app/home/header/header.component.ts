import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'rci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private WhoIsActive: Number=1;
  @Output() private emitActive = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
  }

  changeActive(isActive: Number){
    this.WhoIsActive=isActive;
    this.emitActive.emit(this.WhoIsActive);
  }

}
