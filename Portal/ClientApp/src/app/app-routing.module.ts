import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'oph',loadChildren:()=>import("./modules/oph/oph.module").then(m => m.OphModule) },
  { path:'form',loadChildren:()=>import("./modules/form/form.module").then(m => m.FormModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
