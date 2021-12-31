import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './component/add-form/add-form.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path:'',component:AdminComponent},
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  { path:'admin',component:AdminComponent },
  { path:'addForm',component:AddFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
