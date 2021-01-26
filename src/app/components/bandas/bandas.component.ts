import { Component, OnInit, ViewChild } from '@angular/core';
import { BandasService } from '../../services/bandas.service';
import { SeoService } from '../../services/seo.service';
import { SpotifyService } from '../../services/spotify.service';
import { Banda } from '../../models/banda.model';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  @ViewChild('nombre') inputNombre;
  @ViewChild('descripcion') inputDesc; 
  @ViewChild('imagen') inputImg;


  constructor(
    public bandasService: BandasService,
    private seo: SeoService,
    private spotify: SpotifyService
    ) {

  }

  cargarBanda(nombre, descripcion, imagen) {
    
    descripcion = descripcion.replace(/\r?\n/g, "</br>");
    const nuevaBanda = this.bandasService.crearBanda( nombre, descripcion, imagen );

    // limpiar inputs
    this.inputNombre.nativeElement.value = '';
    this.inputNombre.nativeElement.placeholder = 'Insertar nombre';
    this.inputDesc.nativeElement.value = '';
    this.inputDesc.nativeElement.placeholder = 'Insertar descripción';
    this.inputImg.nativeElement.value = '';
    this.inputImg.nativeElement.placeholder = 'URL';
    
  }

  


  ngOnInit(): void {
    
    this.seo.generateTags({
      title: 'Mis bandas', 
      description: 'Mi lista de bandas de rock favoritas', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'bandas'
    })

  }

}
