import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';

@NgModule({
  declarations: [ProfileComponent, AnunciosComponent],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
