import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ClientesStore } from '../stores/clientes/clientes.store';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private store: ClientesStore,
              private route: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const sesion = sessionStorage.getItem('sesion');

    if (sesion) {
      const cliente: Cliente = new Cliente();
      cliente.SesionLogin = sesion;

      this.store.updateCliente(cliente);

      this.route.navigate(['/app']);
      return false;
    }

    return true;
  }
}
