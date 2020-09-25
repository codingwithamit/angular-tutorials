import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';//Importing first component
import { AboutusComponent } from './aboutus/aboutus.component';//Importing second component
const routes: Routes = [
{path:"home", component:HomecomponentComponent},//Entry of first component path mapping we use for routing.
{path:"aboutus", component:AboutusComponent}//Entry of first component path mapping we use for routing.
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }