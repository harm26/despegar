import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompletaDatosComponent } from './components/completa-datos/completa-datos.component';
import { MenuComponent } from './components/menu/menu.component';
import { CompletarPedidoComponent } from './components/completar-pedido/completar-pedido.component';
import { VariableComponent } from './components/variable/variable.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesComponent,
    NavBarComponent,
    CompletaDatosComponent,
    MenuComponent,
    CompletarPedidoComponent,
    VariableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
