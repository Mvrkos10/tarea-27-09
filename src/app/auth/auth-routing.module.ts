import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'iniciar',
    component: InciarSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
