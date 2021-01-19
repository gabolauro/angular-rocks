import { Component, Input, OnInit } from '@angular/core';
import { BandasService } from '../../services/bandas.service';
import { Banda } from '../../models/banda.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(
  	public bandasService: BandasService,
	private router: Router	
  ) { }

  bandaSeleccionada( banda: Banda ) {

  	// console.log(banda)

    this.router.navigateByUrl('/banda/'+banda.id)

  }

  borrarBanda(banda: Banda) {

    console.log(banda)
    
    const eliminarBanda = this.bandasService.borrarBanda( banda );
    
  }

  ngOnInit(): void {
  }

}
