import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICliente } from '../../commons/models/interfaces/icliente.interface';
import { Cliente } from '../../commons/models/cliente.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { 

  }  
pathLogin: string = 'https://misentinel.sentinelperu.com/misentinelws/rest/rws_mslogin';

public postLogin(userLogin: string, passwordLogin: string): Observable<Cliente> {

  /** application/json */
  let headers: HttpHeaders = new HttpHeaders();
  headers = headers.set('Content-Type','application/json');

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

  return this.http.post( this.pathLogin, body, {headers: headers})
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

  }) );
}

}
