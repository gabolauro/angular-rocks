import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaComponent } from './components/banda/banda.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { BuscarComponent } from './components/buscar/buscar.component';



const app_routes: Routes = [
    { path: 'bandas', component: BandasComponent },
    { path: 'banda/:id', component: BandaComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'bandas' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: false } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






