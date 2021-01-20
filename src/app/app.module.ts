import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaComponent } from './components/banda/banda.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { LoadingComponent } from './components/loading/loading.component';

import { BreaklinePipe } from './pipes/breakline.pipe';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { SubtextPipe } from './pipes/subtext.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandasComponent,
    BandaComponent,
    TarjetasComponent,
    BuscarComponent,
    LoadingComponent,
    BreaklinePipe,
    SubtextPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
