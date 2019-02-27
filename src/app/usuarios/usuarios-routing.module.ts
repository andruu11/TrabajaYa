import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: UsuariosComponent,
        children: [
            { path: '', component: ProfileComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'anuncios', component: AnunciosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }
