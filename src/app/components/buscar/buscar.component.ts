import { Component, OnInit } from '@angular/core';
import { BandasService } from '../../services/bandas.service';
import { SeoService } from '../../services/seo.service';
import { Banda } from '../../models/banda.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  bandas: Banda[] = []; 

  bandasBuscadas: Banda[] = [];

  loading: boolean;

  constructor(
  	public bandasService: BandasService,
  	private seo: SeoService
  	) {}

	buscar(termino:string) {
	// console.log(termino);

	this.loading = true;

	if (termino!='') {
		this.bandasBuscadas = this.bandasService.bandas.filter( banda => banda.nombre.toUpperCase().includes(termino.toUpperCase()));
		// console.log(this.bandasBuscadas)
	} else {
		this.bandasBuscadas = []
	}

	if (this.bandasBuscadas.length>0 || termino=='') {
		this.loading = false 
	}
	
	};

  ngOnInit(): void {

  	this.seo.generateTags({
      title: 'Buscar una banda', 
      description: 'Busca tu banda de rock favorita', 
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'buscar'
    })
    
  }


}
