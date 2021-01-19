
export class Banda {

	id: number;
	nombre: string;
	detalle: string;
	imageurl: string;
	creadaEn: Date;


	constructor(nombre: string, descripcion: string, imagen: string) {
		
		this.nombre = nombre;
		this.detalle = descripcion;
		this.imageurl = imagen;
		this.creadaEn = new Date();
		this.id = new Date().getTime();
	}

 }
