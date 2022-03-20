import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './components/design/design.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'design',component:DesignComponent },
  { path:'dynamic',component:DynamicComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
