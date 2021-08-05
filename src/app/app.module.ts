import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { AddpartidoComponent } from './partidos/addpartido/addpartido.component';
import { ListpartidoComponent } from './partidos/listpartido/listpartido.component';
import { UpmarcadorComponent } from './partidos/upmarcador/upmarcador.component';
import { OpcionesComponent } from './partidos/opciones/opciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AddpartidoComponent,
    ListpartidoComponent,
    UpmarcadorComponent,
    OpcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
