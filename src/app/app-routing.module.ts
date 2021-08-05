import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { ListpartidoComponent } from './partidos/listpartido/listpartido.component';
import { OpcionesComponent } from './partidos/opciones/opciones.component';
import { UpmarcadorComponent } from './partidos/upmarcador/upmarcador.component';

const routes: Routes = [
  { path: '', component:LoginComponent,
  pathMatch: 'full'},
  {path: 'opciones', component:OpcionesComponent},
  {path: 'lista', component:ListpartidoComponent},
  {path: 'actualizar', component:UpmarcadorComponent},
  {path: 'registrar', component:RegistrarComponent},
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
