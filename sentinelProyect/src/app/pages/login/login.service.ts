import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICliente } from '../../commons/Models/Interface/icliente.interface';
import { Cliente } from '../../commons/Models/cliente.model';

@Injectable()
export class LoginService {

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
postLogin(userLogin, passwordLogin): Observable<Cliente> {

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

  return this.http.post( `${environment.urlApi}/rws_mslogin`, body, {headers: headers})
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
