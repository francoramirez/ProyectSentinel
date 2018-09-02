import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http, Response, Headers } from '@angular/http';
import { ICliente } from './commons/models/interfaces/icliente.interface';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Cliente } from './commons/models/cliente.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentinelService {

  pathLogin: string = 'https://misentinel.sentinelperu.com/misentinelws/rest/rws_mslogin';

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

  /** application/json */
  let headers: HttpHeaders = new HttpHeaders().set('Content-Type','text/plain');

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

  this.http.post(this.pathLogin, body, {headers: headers})
  .pipe( map( (resp: ICliente) => {

    const cliente: Cliente = new Cliente();

    if(resp) {
      cliente.NombresFull = resp.Nombres;
    }
     
    return cliente;

  }), catchError( (err) => {
    console.log('ERROR!!');
    const cliente: Cliente = new Cliente();
    cliente.NombresFull = 'CESAR AUGUSTO';
    cliente.SesionLogin = "62738047088510327932";

    return of(cliente);

  }) )
  .subscribe( (resp: Cliente) => {
    
    console.log('Exito', resp.NombresFull);
  }, (err) => {
    console.log('Error', err);
  });
}

}
