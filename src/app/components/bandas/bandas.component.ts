import { Component, OnInit } from '@angular/core';
import { BandasService } from '../../services/bandas.service';
import { Banda } from '../../models/banda.model';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {


  constructor( public bandasService: BandasService ) { }

  cargarBanda(nombre, descripcion, imagen) {
  	
    descripcion = descripcion.replace(/\r?\n/g, "</br>");
  	const nuevaBanda = this.bandasService.crearBanda( nombre, descripcion, imagen );
  	
  }

  


  ngOnInit(): void {
  }

}
