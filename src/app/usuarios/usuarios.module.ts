import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [ProfileComponent, AnunciosComponent, NavbarComponent, UsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
