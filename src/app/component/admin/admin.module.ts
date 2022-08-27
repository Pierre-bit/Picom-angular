import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarifComponent } from './tarif/tarif.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    TarifComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class TarifModule { }
