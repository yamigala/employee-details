import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/**
 * give routing to module
 */
const routes: Routes = [
  {
    path: "employee-details",
    loadChildren:
      "./employee-details/employee-details.module#EmployeeDetailsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
