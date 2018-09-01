import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MiReporteComponent } from "./mi-reporte.component";

@NgModule({
    declarations: [
      MiReporteComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        MiReporteComponent
    ],
    providers: []
  })
  export class MiReporteModule { }