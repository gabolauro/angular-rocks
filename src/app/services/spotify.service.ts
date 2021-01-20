import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // No hace falta incluirlo como providers en el app.module
})
export class SpotifyService {


  constructor( private http: HttpClient ) { 

  	console.log('Servicio Spotify incluido');

   }

   getQuery( query: string ) {

     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQAPjeE6nZ0avT17eeKibJOD8wGlKGAnPagb7YvlWEPqX5LV-dFhfq1CUB1a86PgzGWgCUFhxVQqizKdsTyaFOyqkF1Aga-z68X5d95rhR4zTUesZAlN3-rz7N_Qlj411tm4ryujGV0VDNXDbRArtc7MKQ3kMihYijFnL26t49RBK5DoyoIHp_UiwU-mtnidncjfxsFhpRYlMytSp1-02mYthpjOF7edFAG5zn2oa-U4ZvVvbk3nJI7OlM3bNMKxhMItDJgBD5AQaxs1ivgWV0ibq0AvEN8OOpIuxEY'


     });
     return this.http.get(url, {headers});

   }


   getNewReleases() {

     return this.getQuery('browse/new-releases')
         .pipe( map( data => data['albums'].items));

   }

   getArtistas(termino:string) {

     return this.getQuery(`search?q=${ termino }&type=artist&limit=15`) 
             .pipe( map( data => data['artists'].items));

   }

   getArtista(id:string) {

     return this.getQuery(`artists/${ id }`) 
             // .pipe( map( data => data['artists'].items));
   }

   getTopTracks(id:string) {
     return this.getQuery(`artists/${ id }/top-tracks?market=ES`) 
             .pipe( map( data => data['tracks']));
   }


}
