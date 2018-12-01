import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// ---------------------------------------------------------
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  /**
   * declare model type
   */
public empForm : FormGroup;
public employee : Employee;

/**
 * 
 * @param service : injected employee service
 * @param fb : injected FormBuilder 
 * @param route : injected route for navigation
 */
  constructor(private service : EmployeeService,
    private fb : FormBuilder,
    private route : Router) { }
/**
 * giving required validation using group property
 */
  ngOnInit() {
    this.empForm= this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      designation : ['',[Validators.required]],
      address : ['',[Validators.required]],
      phoneNo : ['',[Validators.required]],

    })
  }
/**
 * 
 * @param employee : define model type
 * add method run on submit click by subscribing 
 */
  public onSubmit(employee:Employee) {
    this.service.addEmp(employee).subscribe()
   console.log(employee);
   /**
    * navigate to view after clicking 
    */
   this.route.navigate(['/employee-details/view']);

 
}
/**
 * get method for getting control of field firstname
 */
  public get firstName(): AbstractControl{
    return this.empForm.get('firstName')
  }
  /**
 * get method for getting control of field lastname
 */
  public get lastName(): AbstractControl{
    return this.empForm.get('lastName')
  }
  /**
 * get method for getting control of field designation
 */
  public get designation(): AbstractControl{
    return this.empForm.get('designation')
  }
  /**
 * get method for getting control of field address
 */
  public get address(): AbstractControl{
    return this.empForm.get('address')
  }
  /**
 * get method for getting control of field phoneno
 */
  public get phoneNo(): AbstractControl{
    return this.empForm.get('phoneNo')
  }
}
