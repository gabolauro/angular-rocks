import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Cookies from 'js-cookie';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // No hace falta incluirlo como providers en el app.module
})
export class SpotifyService {

  tokenSpotify: string;


  constructor( private http: HttpClient ) { 

  	console.log('Servicio Spotify incluido');

    if (Cookies.get('spotifyToken')===undefined) {
      this.getToken().subscribe( (data: any) => {
         // console.log(data);
         this.tokenSpotify =  data['access_token']
         // console.log(this.tokenSpotify);
         Cookies.set('spotifyToken', this.tokenSpotify, { expires: 1/24 });

       });
    }

    this.tokenSpotify = Cookies.get('spotifyToken');

    

 
   
   }



   getQuery( query: string ) {

     const url = `https://api.spotify.com/v1/${ query }`;

     
     // console.log(tokenSpotify)

     const headers = new HttpHeaders({
       'Authorization': 'Bearer '+this.tokenSpotify


     });
     return this.http.get(url, {headers});

   }

   getToken() {

     return this.http.get('https://spotify-get-token.herokuapp.com/spotify/391035a0ee5c49f99ace1d55a7818d0a/50f6b41b560a415e80ad10c9a3c678db').pipe( map( data => data));;


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
