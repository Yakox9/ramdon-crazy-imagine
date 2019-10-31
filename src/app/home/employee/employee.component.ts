import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'rci-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() private emp:Employee;


  constructor() { 
  }

  ngOnInit() {
    this.updateURL();
  }

  updateURL(){
    this.emp.url=`../../../assets/image/${this.emp.url}.jpg`;
  }
}
