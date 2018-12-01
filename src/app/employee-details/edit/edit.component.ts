import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
// ------------------------------------------------------------------------
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  /**
   * declare model type
   */
  public empForm: FormGroup;
  public employee: Employee;
  /**
   *
   * @param service :injected EmployeeService
   * @param fb :injected FormBuilder
   * @param route :injected Router
   * @param router :injected ActivatedRoute
   */
  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    /**
     * loadForm for loading form at initial level
     * and editEmp method for getting data by id
     */
    this.loadForm();
    this.editEmp();
  }
  /**
   * define loadForm
   */
  public loadForm(): void {
    this.empForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phoneNo: ["", [Validators.required]]
    });
  }
  /**
   * get method for getting control of field firstname
   */
  public get firstName() {
    return this.empForm.get("firstName");
  }
  /**
   * get method for getting control of field lastName
   */
  public get lastName() {
    return this.empForm.get("lastName");
  }
  /**
   * get method for getting control of field designation
   */
  public get designation() {
    return this.empForm.get("designation");
  }
  /**
   * get method for getting control of field address
   */
  public get address() {
    return this.empForm.get("address");
  }
  /**
   * get method for getting control of field phoneNo
   */
  public get phoneNo() {
    return this.empForm.get("phoneNo");
  }

  /**
   * define edit method
   */
  public editEmp(): void {
    /**
     * used snapshot for getting id
     */
    const id = +this.router.snapshot.paramMap.get("id");
    this.service.editEmp(id).subscribe(emp => {
      this.employee = emp;
      console.log(this.employee);
      /**
       * used patch value for changing data of particular field
       */
      this.empForm.patchValue({
        id: this.employee.id,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        designation: this.employee.designation,
        address: this.employee.address,
        phoneNo: this.employee.phoneNo
      });
    });
  }
  /**
   *
   * @param employee : define model type
   * update method for updating data on browser
   */
  public updateEmp(employee: Employee): void {
    this.service.updateEmp(employee).subscribe(emp => {
      this.employee = emp;
    });

    this.route.navigate(["/view"]);
  }
}
