import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import {AppComponent} from './app.component';
import { ErrorComponent } from './error/error.component';
import { PeliComponent } from './peli/peli.component';
import {PelisComponent} from './pelis/pelis.component';

const routes: Routes = [
  {path:'pelis',component:PelisComponent},
  {path:'peli/:title',component:PeliComponent},
  {path:'actor/:name', component:ActorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
