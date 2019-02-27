import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { EmpresasRoutingModule } from './empresas-routing.module';

@NgModule({
  declarations: [EmpresasComponent, ProfileComponent, AnunciosComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
