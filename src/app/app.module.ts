import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompletaDatosComponent } from './components/completa-datos/completa-datos.component';
import { MenuComponent } from './components/menu/menu.component';
import { CompletarPedidoComponent } from './components/completar-pedido/completar-pedido.component';
import { VariableComponent } from './components/variable/variable.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchDescriptionPipe } from './pipes/search-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesComponent,
    NavBarComponent,
    CompletaDatosComponent,
    MenuComponent,
    CompletarPedidoComponent,
    VariableComponent,
    FooterComponent,
    SearchPipe,
    SearchDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
