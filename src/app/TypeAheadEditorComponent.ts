import {Component} from "@angular/core";
import {AgEditorComponent} from "ag-grid-ng2/main";

@Component({
    selector: 'square-cell',
    template: `
      <typeahead
        [(ngModel)]="selectedFruit"
        [list]="fruits"
        [searchProperty]="'searchText'" [displayProperty]="'name'"
        [maxSuggestions]="2"
        (suggestionSelected)="fruitSelected($event)"
        placeholder="Begin typing a fruit">
      </typeahead>`
})
export class TypeAheadEditorComponent implements AgEditorComponent {
    private params: any;
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

    agInit(params: any): void {
        this.params = params;
    }

    getValue(): any {
        return this.fruitName;
    }

    isPopup() : boolean {
        return true;
    }

    public fruitSelected(fruit) {
        this.fruitName = fruit ? fruit.name : 'none';
    }
}