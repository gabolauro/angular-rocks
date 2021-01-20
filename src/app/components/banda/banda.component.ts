import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService } from '../../services/bandas.service';
import { SeoService } from '../../services/seo.service';
import { Banda } from '../../models/banda.model';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  banda: Banda[] = [];

  text: string[]

  constructor(
  	public bandasService: BandasService,
  	private router: ActivatedRoute,
    private seo: SeoService
  	) { 

  		this.router.params.subscribe( params => {

	  		this.getBanda( params['id'] )

	  	});

  	 }

  getBanda(id: string) {

  	this.banda = this.bandasService.getBanda( id )
    console.log(this.banda)

  }




  ngOnInit(): void {
    
    this.seo.generateTags({
      title: this.banda[0].nombre, 
      description: this.banda[0].detalle, 
      image: this.banda[0].imageurl,
      slug: `banda/${this.banda[0].id}`
    })

  }
}
