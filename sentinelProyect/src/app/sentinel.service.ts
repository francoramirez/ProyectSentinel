import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http, Response, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SentinelService {

  pathLogin: string = "https://misentinel.sentinelperu.com/misentinelws/rest/rws_mslogin";

  constructor(private http: HttpClient) { 

  }
/*
  getData() {
    return this.http.get('https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyCp3etkeMAvnyrF-jKNMAVz8LLn9Pk7RJI')
    .subscribe(data => {
      console.log("We got ", data)
    })
  }
*/
postLogin(userLogin, passwordLogin) {

  let headers = new HttpHeaders().set('Content-Type',['application/json']);

  let body = JSON.stringify(
    {
      Usuario: userLogin,
      Password: passwordLogin,
      ValidaCookie: 'S',
      Plataforma: 'WEB',
      VersionId: '',
      VersOpc: '',
      Operador: '',
      IdOrigen: 1
    }
  );

  return this.http.post(this.pathLogin, body, {headers: headers}).subscribe();
}

}
