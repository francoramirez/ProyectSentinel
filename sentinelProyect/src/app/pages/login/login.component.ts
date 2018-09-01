import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SentinelService } from '../../sentinel.service';
import { LoginService } from './login.service';
import { Cliente } from '../../commons/Models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public error: string;
  
  constructor(private router: Router, 
              private service: LoginService,
              private fb: FormBuilder) { }

   LoginClickHome() {

    
    if(this.loginForm.valid) {

      this.error = undefined;
      
      this.service.postLogin("72012380","1234567")    
      .subscribe( (resp: Cliente) => {
        
        console.log('Exito desde login', resp.NombresFull);
        this.router.navigate(['/app']);
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
  }


  private initForm() {

    this.loginForm = this.fb.group({
      documento: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    })

  }

}
