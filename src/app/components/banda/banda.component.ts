import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService } from '../../services/bandas.service';
import { SeoService } from '../../services/seo.service';
import { SpotifyService } from '../../services/spotify.service';
import { Banda } from '../../models/banda.model';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  banda: Banda[] = [];

  topTracks: any[] = [];

  text: string[]

  constructor(
  	public bandasService: BandasService,
  	private router: ActivatedRoute,
    private seo: SeoService,
    private spotify: SpotifyService
  	) { 

  		this.router.params.subscribe( params => {

	  		this.getBanda( params['id'] )
        this.buscarBanda(this.banda[0].nombre)


	  	});

  	 }




  getBanda(id: string) {

  	this.banda = this.bandasService.getBanda( id )
    // console.log(this.banda)

  }

  buscarBanda(termino:string) {

    this.spotify.getArtistas( termino )
    .subscribe( (data: any) => {


      // console.log(data[0]);

      this.spotify.getTopTracks( data[0].id )
        .subscribe( topTracks => {
          // console.log(topTracks);
          this.topTracks = topTracks;

        });


    }); 

  
  };




  ngOnInit(): void {
    
    this.seo.generateTags({
      title: this.banda[0].nombre, 
      description: this.banda[0].detalle, 
      image: this.banda[0].imageurl,
      slug: `banda/${this.banda[0].id}`
    })


  }
}
