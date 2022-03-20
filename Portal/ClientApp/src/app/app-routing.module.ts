import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentMasterComponent } from './modules/dynamic-component/components/dynamic-component-master/dynamic-component-master.component';

const routes: Routes = [
  { path:'', component:DynamicComponentMasterComponent },
  { path:'dynamic',loadChildren:()=>import("./modules/dynamic-component/dynamic-component.module").then(m => m.DynamicComponentModule) },
  { path:'oph',loadChildren:()=>import("./modules/oph/oph.module").then(m => m.OphModule) },
  { path:'form',loadChildren:()=>import("./modules/form/form.module").then(m => m.FormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
