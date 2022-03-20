import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'edit-pannel-container',
  template: `
    <div class="w-100 h-100 flex">
    <p-tabView (onChange)="handleChange($event)">
    <p-tabPanel header="Props">
        <grid-props-edit-panel [configs]="editClone"></grid-props-edit-panel>
    </p-tabPanel>
    <p-tabPanel header="HTML" *ngIf="editClone['el']">
        <html-edit-panel [code]="editClone['el']" [showEditor]="showEditor"></html-edit-panel>
    </p-tabPanel>
</p-tabView>
<button class="btn btn-info" (click)="onSave()">Save</button>
<button class="btn btn-danger" (click)="onCancel()">Save</button>
    </div>
  `,
  styles: [
  ]
})
export class EditPannelContainerComponent implements OnInit, OnChanges {
  @Input() configs: GridsterItem = { x: 0, y: 0, rows: 1, cols: 1 };
  @Output() updateConfigs = new EventEmitter<GridsterItem>();
  @Output() cancel = new EventEmitter();
  editClone: GridsterItem = { x: 0, y: 0, rows: 1, cols: 1 };
  showEditor = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.editClone = JSON.parse(JSON.stringify(this.configs));
  }

  onSave() {
    Object.assign(this.configs, this.editClone);
    this.updateConfigs.emit(this.configs);
  }

  onCancel() {
    this.cancel.emit();
  }


  handleChange(e: any) {
    var index = e.index;
    if (index == 1) {
      this.showEditor = true;
    }
  }


}
