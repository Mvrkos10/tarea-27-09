import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'
import { AuthRoutingModule } from './auth-routing.module';
import { InciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    InciarSesionComponent,
    RegistroComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    RouterModule
  ]
})
export class AuthModule { }
