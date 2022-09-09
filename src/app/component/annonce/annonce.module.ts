import { NgModule, LOCALE_ID  } from '@angular/core';import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { CommonModule } from '@angular/common';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { DiffusionComponent } from './diffusion/diffusion.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';
import { PaiementComponent } from './create-annonce/paiement/paiement.component';
import { AnnonceComponent } from './annonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';
import { TranslateModule } from '@ngx-translate/core';


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
    EditorModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class AnnonceModule { }
