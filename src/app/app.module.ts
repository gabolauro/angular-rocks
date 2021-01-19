import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaComponent } from './components/banda/banda.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { LoadingComponent } from './components/loading/loading.component';

import { BreaklinePipe } from './pipes/breakline.pipe';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { SubtextPipe } from './pipes/subtext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandasComponent,
    BandaComponent,
    AgregarComponent,
    TarjetasComponent,
    BuscarComponent,
    LoadingComponent,
    BreaklinePipe,
    SubtextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
