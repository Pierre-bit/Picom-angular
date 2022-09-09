import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { CommonModule } from '@angular/common';
import { TarifComponent } from './tarif/tarif.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TarifComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },]
})
export class TarifModule { }
