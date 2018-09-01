import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./views/header/header.component";
import { MatTabsModule } from '@angular/material/tabs';
import { HomeRoutingModule } from "./home-routing.module";
import { DashboardModule } from "../../views/dashboard/dashboard.module";
import { MiReporteModule } from "../../views/mi-reporte/mi-reporte.module";

@NgModule({
    declarations: [
      HomeComponent,
      HeaderComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        HomeRoutingModule,
        DashboardModule,
        MiReporteModule
    ],
    exports: [
        HomeComponent
    ],
    providers: []
  })
  export class HomeModule { }