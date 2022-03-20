import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'grid-props-edit-panel',
  template: `
    <div class="w-100 h-100">
      <div *ngFor="let key of attrKeys" [ngSwitch]="types[key].type">
        <label>{{key}}</label>
        <input pInputText type="number" [(ngModel)]="configs[key]"  *ngSwitchCase="'number'"/>

        <p-checkbox [binary]="true" [(ngModel)]="configs[key]" *ngSwitchCase="'boolean'"></p-checkbox>

        <input pInputText type="text" [(ngModel)]="configs[key]"  *ngSwitchDefault/>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class GridPropsEditPanelComponent implements OnInit, OnChanges {
  @Input() configs: GridsterItem = { x: 0, y: 0, rows: 1, cols: 1 };
  types: { [key: string]: { type: string } } = {
    x: { type: 'number' },
    y: { type: 'number' },
    cols: { type: 'number' },
    rows: { type: 'number' },
    el: { type: 'text' }
  }
  attrKeys: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.attrKeys = Object.keys(this.configs);
    this.attrKeys = this.attrKeys.filter(x => x != 'el');
    for(let key of this.attrKeys){
      this.types[key] = {type:'text'};
      this.types[key].type = typeof this.configs[key];
    }
    console.log(this.types)
  }


}
