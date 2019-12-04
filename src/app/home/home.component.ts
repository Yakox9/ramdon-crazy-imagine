import { Component, OnInit } from '@angular/core';
import { Employee } from '../interface/employee';
import {EmployeeService} from '../service/employee.service'

@Component({
  selector: 'rci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private employees:Employee [];
  private cantEmployee: number=0;
  private whoIsActive:number=0;
  private randomOn:number=0;

  constructor(private employeeProvider:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    console.log(this.cantEmployee)
  }

  getEmployees(){
    this.employeeProvider.getEmployees().subscribe(Employees=>this.employees=Employees);
    this.cantEmployee=this.employees.length;
  }

  procesEmiter(event){
    this.whoIsActive=event;
    if(this.whoIsActive===1){
      this.randomOn=0;
      this.generateStaticNumber();
    }
  }

  generateRamdonNumber(){
    let max:number=this.cantEmployee;
    let listNumber:Array<number> = new Array();
    let i:number =0;

    for (let index = 1; index <= max; index++) {
      listNumber.push(index);
    }
    while (listNumber.length>0) {
      let vars=Math.trunc(Math.random()*(listNumber.length)+1);
      console.log(vars);
      this.employees[i].value=listNumber[vars-1];
      listNumber.splice(vars-1,1);
      console.log(listNumber);
      i++;
    }
  }

  activeRandom(){
    this.randomOn=1;
    this.generateRamdonNumber();

    
  }

 async getValue(value){
    setTimeout(() => {
      
    }, 10);
    return value;
  }
  generateStaticNumber(){
    for (let index = 0; index < this.employees.length; index++) {
      this.employees[index].value=0;
    }
  }
}
