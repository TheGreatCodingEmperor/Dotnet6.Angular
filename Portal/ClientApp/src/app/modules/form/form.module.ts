import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MasterComponent } from './components/master/master.component';
import { GridsterModule } from 'angular-gridster2';
import { DesignComponent } from './components/design/design.component';
import { SharedModule } from '../shared/shared.module';
import { EditPannelContainerComponent } from './components/design/components/edit-pannel-container/edit-pannel-container.component';
import { GridPropsEditPanelComponent } from './components/design/components/grid-props-edit-panel/grid-props-edit-panel.component';
import { HtmlEditPanelComponent } from './components/design/components/html-edit-panel/html-edit-panel.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { SquareButtonComponent } from './components/home/components/square-button/square-button.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    DesignComponent,
    EditPannelContainerComponent,
    GridPropsEditPanelComponent,
    HtmlEditPanelComponent,
    SquareButtonComponent,
    DynamicComponentComponent,
  ],
  imports: [
    SharedModule,
    GridsterModule,
    CommonModule,
    FormRoutingModule,
    MonacoEditorModule
  ]
})
export class FormModule { }
