import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SentinelService } from '../../sentinel.service';
import { Cliente } from '../../commons/Models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiReporteService } from './mi-reporte.service';

@Component({
  selector: 'app-mi-reporte',
  templateUrl: './mi-reporte.component.html',
  styleUrls: ['./mi-reporte.component.css'],
  providers: [
    MiReporteService
  ]
})
export class MiReporteComponent  {
  
  constructor() { }

 

  ngOnInit() {

  }

}
