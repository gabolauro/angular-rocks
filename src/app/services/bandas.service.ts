import { Injectable } from '@angular/core';
import { Banda } from '../models/banda.model';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

	bandas: Banda[] = [];

  constructor() {

  	// const banda1 = new Banda('Led Zepelling', 'Descripcion', 'https://i.pinimg.com/originals/43/bf/a8/43bfa8b3082c6c79fdf50000a95c7050.jpg');
   //  const banda2 = new Banda('Deep Purple', 'Descripcion', 'https://static.wikia.nocookie.net/logopedia/images/f/f6/Deep_Purple_logo2.jpg');

   //  this.bandas.push(banda1, banda2);

    // console.log(this.bandas)

    this.cargarStorage()

   }


   crearBanda(nombre: string, descripcion: string, imagen: string) {

   	const nuevaBanda = new Banda(nombre, descripcion, imagen);

    this.bandas.push(nuevaBanda);

    this.guardarStorage();

   }

   borrarBanda( banda: Banda ) {

     this.bandas = this.bandas.filter( bandaData => bandaData.id !== banda.id )
     this.guardarStorage();

   }

   getBanda( id) {

     return this.bandas.filter( bandaData => bandaData.id == id )


   }


   // Guardar info de bandas en el storage local
   guardarStorage() {
     localStorage.setItem('data', JSON.stringify(this.bandas) );
   }

   // Cargarinfo de las bandas desde el storage local
   cargarStorage() {

     if ( localStorage.getItem('data') ) {
       this.bandas = JSON.parse( localStorage.getItem('data') );
     } else {
       this.bandas = [];
     }

   }


}
