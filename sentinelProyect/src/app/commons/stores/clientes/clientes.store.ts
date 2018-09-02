import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesStore {

  /** Emite el cliente cuando se subscriben a el */
  public store: BehaviorSubject<Cliente> = new BehaviorSubject<Cliente>(undefined);

  /** Cliente logueado en el sistema */
  private cliente: Cliente;
  
  constructor() {}

  /**
   * Actualiza el cliente almacenado en el Store y notifica a los que están subscritos
   * 
   * @param x Cliente a almacenar en el Store
   */
  public updateCliente(x: Cliente) {
    this.cliente = x;
    this.store.next(this.cliente);
  }

  /**
   * Retorna el observable para que se subscriban y recibir actualizaciones del cliente
   */
  public getCliente(): Observable<Cliente> {
    return this.store.asObservable();
  }
}