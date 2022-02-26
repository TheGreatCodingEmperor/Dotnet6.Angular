import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MasterComponent } from './components/master/master.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
