/**
 * @author: Yamini Gala
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//---------------------------------------------------
import { EmployeeDetailsRoutingModule } from "./employee-details-routing.module";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";
import { EmployeeService } from "./employee.service";
import { TableModule } from "yamini-package";

@NgModule({
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  declarations: [AddComponent, ViewComponent, EditComponent],
  exports: [AddComponent, ViewComponent, EditComponent],
  providers: [EmployeeService]
})
export class EmployeeDetailsModule {}
