import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OphRoutingModule } from './oph-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MasterComponent } from './components/master/master.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    OphRoutingModule
  ]
})
export class OphModule { }
