import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';
import { DiffusionComponent } from './diffusion/diffusion.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

const routes: Routes = [
  {path: '', component: AnnonceComponent,children: [
  {path: '', redirectTo: '/annonce/home', pathMatch:'full'},
  {path:'home', component: ListAnnonceComponent},
  {path: 'create-annonce', component: CreateAnnonceComponent},
  {path: 'diffusion', component: DiffusionComponent},
  {path:'**', redirectTo: '/home', pathMatch:'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
