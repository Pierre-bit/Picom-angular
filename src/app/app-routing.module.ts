import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AnnonceComponent } from './component/annonce/annonce.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { TarifComponent } from './component/admin/tarif/tarif.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'annonce', loadChildren:()=>
      import('./component/annonce/annonce.module').then((m) => m.AnnonceModule)

  },
  {path: 'admin',loadChildren:()=>
    import('./component/admin/admin.module').then((m) => m.TarifModule)
  },

  /*{
    path: 'tarif', component: TarifComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  { path: 'annonce', component: AnnonceComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  },*/
  {path:'**', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
