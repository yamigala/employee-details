import { Component, OnInit, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  _data: any[] = [];
  tableKeys: string[];
  @Input() headers: any[];
  @Input()
  set data(data: any[]) {
    if (data) {
      this._data = data;
        this.tableKeys = Object.keys(this._data[0])
    }
    console.log('a')
  }
  get data() {
    return this._data;
  }

  // @Input() data:any[];

  constructor() {}

  ngOnInit() {
  }
}
