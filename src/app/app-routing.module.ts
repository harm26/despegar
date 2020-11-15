import { CompletaDatosComponent } from './components/completa-datos/completa-datos.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { MenuComponent } from './components/menu/menu.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const appRoutes: Routes = [
  { path: 'deliveries', component: DeliveriesComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'datos', component: CompletaDatosComponent},
  { path: '', redirectTo: '/deliveries', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
