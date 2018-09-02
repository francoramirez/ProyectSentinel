import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesStore {

  public store: BehaviorSubject<Cliente> = new BehaviorSubject<Cliente>(undefined);
  private cliente: Cliente;
  
  constructor() {}

  public updateCliente(x: Cliente) {
    this.cliente = x;
    this.store.next(this.cliente);
  }

  public getCliente(): Observable<Cliente> {
    return this.store.asObservable();
  }
}