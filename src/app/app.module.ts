import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RealizaPedidosComponent } from './components/realiza-pedidos/realiza-pedidos.component';
import { CompletaDatosComponent } from './components/completa-datos/completa-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesComponent,
    NavBarComponent,
    RealizaPedidosComponent,
    CompletaDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
