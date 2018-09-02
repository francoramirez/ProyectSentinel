import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SesionGuard } from './commons/guards/sesion.guard';
import { LoginGuard } from './commons/guards/login.guard';


const routes: Route[] = [
  {
   path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LoginGuard]
  },
  {
    path: 'app', loadChildren: './pages/home/home.module#HomeModule', canActivate: [SesionGuard]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
