import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SentinelService } from '../../sentinel.service';
import { DashboardService } from './dashboard.service';
import { Cliente } from '../../commons/models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesStore } from '../../commons/stores/clientes/clientes.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    DashboardService
  ]
})
export class DashboardComponent implements OnInit {

  public loginForm: FormGroup;
  public error: string;
  public cliente: Cliente;
  
  constructor(private router: Router, 
              private service: DashboardService,
              private fb: FormBuilder,
              private store: ClientesStore) { }


   

  ngOnInit() {

    this.initForm();
    this.cliente = new Cliente();

    setTimeout( () => {

      /** Obtiene el cliente del Store */
      this.store.getCliente().subscribe( (cliente: Cliente) => {
  
        if (cliente) {
          this.cliente = cliente;
        }
  
      });
    });
    
    
  }


  private initForm() {

    this.loginForm = this.fb.group({
      documento: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });

  }

}
