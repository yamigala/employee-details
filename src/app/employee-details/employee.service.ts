import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//--------------------------------------------
import { Employee } from "./employee.model";

@Injectable()
export class EmployeeService {
  /**
   * set url of database of json server
   */
  public empUrl = "http://localhost:3000/employee";

  constructor(private http: HttpClient) {}
  /**
   * get method for getting data server to database
   */
  public getEmp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empUrl);
  }
  /**
   *
   * @param id :unique identifier
   * delete method will delete data from server
   */
  public deleteEmp(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.empUrl + "/" + id);
  }
  /**
   *
   * @param id :unique identifier
   * edit method eill get data from database
   */
  public editEmp(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.empUrl + "/" + id);
  }
  /**
   *
   * @param employee :model type
   * add method for adding data to server
   */
  public addEmp(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.empUrl, employee);
  }
  /**
   *
   * @param employee :model type
   * update method for updating data in database
   */
  public updateEmp(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.empUrl, employee);
  }
}
