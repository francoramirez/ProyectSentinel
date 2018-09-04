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

postLogin(userLogin: string, passwordLogin: string) {

  /** application/json */
  let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');

  let body = JSON.stringify(
    {
      Usuario: userLogin,
      Password: passwordLogin,
      ValidaCookie: 'S',
      Plataforma: 'WEB',
      VersionId: '1',
      VersOpc: '1',
      Operador: '1',
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
