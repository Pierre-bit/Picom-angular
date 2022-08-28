import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AdminComponent } from './admin.component';
import { TarifComponent } from './tarif/tarif.component';


const routes: Routes = [
  {path: '', component: AdminComponent,children: [
  {path: '', redirectTo: '/admin/tarif', pathMatch:'full'},
  {path: 'tarif' , component: TarifComponent,}, 
  {path:'**', redirectTo: 'tarif', pathMatch:'full'}
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
