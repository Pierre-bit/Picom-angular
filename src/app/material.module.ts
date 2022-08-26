import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const modules = [MatButtonModule,MatInputModule];
@NgModule({
  exports: modules,
})
export class MaterialModule { }
