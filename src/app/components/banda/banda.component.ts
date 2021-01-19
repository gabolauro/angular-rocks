import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService } from '../../services/bandas.service';
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
  	private router: ActivatedRoute
  	) { 

  		this.router.params.subscribe( params => {

	  		this.getBanda( params['id'] )

	  	});

  	 }

  getBanda(id: string) {

  	this.banda = this.bandasService.getBanda( id )

  }




  ngOnInit(): void {
  }

}
