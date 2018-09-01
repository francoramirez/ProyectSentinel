import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { MiReporteComponent } from '../../views/mi-reporte/mi-reporte.component';


const routes: Route[] = [
  {
   path: '', component: HomeComponent, children: [
     { path: '', component: DashboardComponent},
     { path: 'mi-reporte', component: MiReporteComponent},
   ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
