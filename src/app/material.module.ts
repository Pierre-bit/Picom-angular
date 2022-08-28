import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';



const module = [
  MatToolbarModule,
   MatTableModule,
    MatButtonModule,
     MatFormFieldModule,
      MatSelectModule,
       MatInputModule,
        MatIconModule,
         MatSnackBarModule,
         MatMenuModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatPaginatorModule
        ]
@NgModule({
  exports: module
})
export class MaterialModule { }
