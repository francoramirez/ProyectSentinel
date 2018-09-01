import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SentinelService } from '../sentinel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private service: SentinelService) { }

   LoginClickHome() {

    this.service.postLogin("72012380","1234567");
    this.router.navigate(['/home']);

  }

  ngOnInit() {
         
  }

}
