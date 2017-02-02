import { Component } from '@angular/core';

import {GridOptions} from 'ag-grid/main';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  public gridOptions:GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnDefs();
  }

  private createColumnDefs() {
    return [
      {headerName: "Row", field: "row", width: 140},
      {
        headerName: "Square",
        field: "value",
        editable:true,
        colId: "square",
        width: 125
      },
      {
        headerName: "Cube",
        field: "value",
        colId: "cube",
        width: 125
      },
      {
        headerName: "Row Params",
        field: "row",
        colId: "params",
        width: 245
      },
      {
        headerName: "Currency (Pipe)",
        field: "currency",
        colId: "params",
        width: 150
      }
    ];
  }

  public refreshRowData() {
    let rowData = this.createRowData();
    this.gridOptions.api.setRowData(rowData);
  }

  private createRowData() {
    let rowData:any[] = [];

    for (var i = 0; i < 15; i++) {
      rowData.push({
        row: "Row " + i,
        value: i,
        currency: i + Number(Math.random().toFixed(2))
      });
    }

    return rowData;
  }


  fruitName: string;
  fruits: any[] = [
    {
      id: 1,
      name: "Apple",
      searchText: "apple"
    },
    {
      id: 2,
      name: "Orange",
      searchText: "orange"
    },
    {
      id: 3,
      name: "Banana",
      searchText: "banana"
    }
  ];

  selectedFruit: any = this.fruits[0];

  public fruitSelected(fruit) {
    this.fruitName = fruit ? fruit.name : 'none';
  }

}
