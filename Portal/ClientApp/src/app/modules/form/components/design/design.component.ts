import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { MasterComponent } from '../master/master.component';

@Component({
  selector: 'app-design',
  template: `
  <app-global-master [iconBarExpand]="iconBarExpand" [sideBarExpand]="sideBarExpand" [sideBarRightExpand]="sideBarRightExpand">
  <ng-template #topBarTemplate>
    <button class="btn"></button>
  </ng-template>
  <ng-template #iconBarTemplate>

  </ng-template>
  <ng-template #sideBarTemplate>
    <div class="w-100 h-100 overflow-auto">
      <div class="card p-1 text-center" draggable="true" (dragstart)="beforeCreate('input')" >Input</div>
    </div>
  </ng-template>

  <ng-template #mainTemplate>
    <gridster [options]="options" class="h-100">
      <gridster-item [item]="item" *ngFor="let item of dashboard" [innerHtml]="item['el'] | safe:'html'" (click)="onEdit(item)">
        <!-- your content here -->
      </gridster-item>
    </gridster>
  </ng-template>

  <ng-template #sideBarRightTemplate>
    <edit-pannel-container *ngIf="editItem" [configs]="editItem" (updateConfigs)="changedOptions($event)" ></edit-pannel-container>
  </ng-template>
</app-global-master>
  
  `,
  styles: [

  ]
})
export class DesignComponent extends MasterComponent implements OnInit {
  selectedCreate = "";
  editItem: GridsterItem | null = null;
  rightBarFull = false;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  options: GridsterConfig = {};
  dashboard: Array<GridsterItem> = [];

  static itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  override ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: true,
      enableEmptyCellDrag: true,
      enableOccupiedCellDrop: true,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      // emptyCellClickCallback: this.emptyCellClick.bind(this),
      // emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      // emptyCellDragCallback: this.emptyCellClick.bind(this),
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0, id: '123' },
      { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2' },
      { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2' },
      { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled' },
      { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled' },
      { cols: 1, rows: 1, y: 2, x: 6 }
    ];
  }

  beforeCreate(event: string) {
    console.log(event)
    this.selectedCreate = event;
  }

  onCreate() {
  }

  onEdit(event: GridsterItem) {
    this.editItem = event;
    this.sideBarRightExpand = true;
  }

  changedOptions(event: GridsterItem) {
    console.log(this.dashboard);
    if (this.options.api != undefined) {
      (this.options.api as any).optionsChanged();
    }
  }

  removeItem(item: any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, rows: 1, cols: 1 });
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem): void {
    console.info('empty cell click', event, item);
    item['el'] = `<input type="text" />`;
    this.dashboard.push(item);
  }

  toggleEditPanel() {
    this.rightBarFull = !this.rightBarFull;
  }
}
