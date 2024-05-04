import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ServiceComponent} from "./service/service.component"
import {AboutUsComponent } from "./about-us/about-us.component"
import {ClientsComponent } from "./clients/clients.component"

const routes: Routes = [
  {path:'',component:ServiceComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'service',component:ServiceComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'clients',component:ClientsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
