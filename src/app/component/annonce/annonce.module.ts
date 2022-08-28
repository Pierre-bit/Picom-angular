import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { DiffusionComponent } from './diffusion/diffusion.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';
import { PaiementComponent } from './create-annonce/paiement/paiement.component';
import { AnnonceComponent } from './annonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAnnonceComponent,
    DiffusionComponent,
    CreateAnnonceComponent,
    PaiementComponent,
    AnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnnonceModule { }
