import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SentinelService } from '../../sentinel.service';
import { DashboardService } from './dashboard.service';
import { Cliente } from '../../commons/Models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
              private fb: FormBuilder) { }



   LoginClickHome() {

    
    if(this.loginForm.valid) {

      this.error = undefined;
      
      this.service.postLogin("72012380","1234567")    
      .subscribe( (resp: Cliente) => {
        
        console.log('Exito desde login', resp.NombresFull);
        this.router.navigate(['/home']);
      }, (err) => {
        console.log('Error', err);
      });    

    } else {
    console.log('ERROR EN FORMULARIO');
    this.error = 'Datos Inválidos';
    }
  }

  ngOnInit() {

    this.initForm();
    this.cliente = new Cliente();
    this.cliente.NombresFull = "Franco Ramirez";
  }


  private initForm() {

    this.loginForm = this.fb.group({
      documento: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    })

  }

}
