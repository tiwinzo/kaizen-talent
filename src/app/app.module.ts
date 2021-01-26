import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistroreclutadorComponent } from './auth/registroreclutador/registroreclutador.component';
import { RegistropostulanteComponent } from './auth/registropostulante/registropostulante.component';
import { LoginpostulanteComponent } from './auth/loginpostulante/loginpostulante.component';
import { LoginreclutadorComponent } from './auth/loginreclutador/loginreclutador.component';
import { PagesComponent } from './pages/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    RegistroreclutadorComponent,
    RegistropostulanteComponent,
    LoginpostulanteComponent,
    LoginreclutadorComponent,
    PagesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
