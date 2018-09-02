import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ClientesStore } from '../stores/clientes/clientes.store';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor(private store: ClientesStore,
              private route: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.store.getCliente()
    .pipe( take(1), map( (cliente) => {

      if (cliente) {
        return true;
      }

      const sesion = sessionStorage.getItem('sesion');

      if (sesion) {
        cliente = new Cliente();
        cliente.SesionLogin = sesion;
  
        this.store.updateCliente(cliente);
  
        return true;
      }

      this.route.navigate(['/login']);
      return false;
    }));
  }
}
