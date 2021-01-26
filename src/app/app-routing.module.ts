import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginreclutadorComponent } from './auth/loginreclutador/loginreclutador.component';
import { RegistroreclutadorComponent } from './auth/registroreclutador/registroreclutador.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [

  { 
    path: '', component: PagesComponent,

    children: [
      
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

  { path: 'loginre', component: LoginreclutadorComponent },
  { path: 'registrore', component: RegistroreclutadorComponent },

  { path: '**', component: NopagefoundComponent },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
