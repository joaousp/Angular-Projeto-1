import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { NavComponent } from './components/share/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './components/pages/projetos/index/index.component'; 
import { Bloco1Component } from './components/pages/projetos/index/bloco1/bloco1.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IndexComponent,
    Bloco1Component,
    NotFoundComponent,
    PrincipalComponent,
    ProjetosComponent,
    AboutComponent,
    ContactsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
