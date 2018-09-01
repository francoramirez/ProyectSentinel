import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: []
  })
  export class DashboardModule { }