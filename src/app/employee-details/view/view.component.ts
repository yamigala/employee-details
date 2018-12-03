/**
 * @author: Yamini Gala
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//-----------------------------------------------------//
import { Employee } from "../employee.model";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  public employee: Employee[];
  public emp: Employee[];
  headers: any[];
  constructor(private service: EmployeeService, private route: Router) {}

  ngOnInit() {
    this.headers = [
      "id",
      "First Name",
      "Last Name",
      "designation",
      "address",
      "phone Number"
    ];
    this.getEmp();
  }
  /**
   * get method will take data from server and display to browser
   */

  public getEmp(): void {
    this.service.getEmp().subscribe(emp => {
      this.employee = emp;
    });
  }
  /**
   *
   * @param id :unique identifier
   * delete methgod will delete data with the help of id
   */
  public deleteEmp(id: number): void {
    this.service.deleteEmp(id).subscribe();
    this.getEmp();
  }

  public onDelete(id: number) {
    this.service.deleteEmp(id).subscribe(() => {
      this.getEmp();
    });
  }
  public onEdit(id: number) {
    this.route.navigate(["/employee-details/edit" + "/" + id]);
  }
}
