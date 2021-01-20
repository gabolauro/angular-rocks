import { Injectable } from '@angular/core';
import { Banda } from '../models/banda.model';
import * as dataBandas from '../components/bandas/dataBandas.json'; // Para carga de bandas predeterminadas

@Injectable({
  providedIn: 'root'
})
export class BandasService {

	bandas: Banda[] = [];

  constructor() {


    this.cargarStorage();

    if (this.bandas.length>0) {

      // console.log('Toma los datos del local storage')

    } else {

      this.bandas = dataBandas['default'];
      this.guardarStorage();
      // console.log('Toma los datos del archivo json, y lo guarda en el local storage')

    }


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
