import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { IndexComponent } from './components/pages/projetos/index/index.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';

const routes: Routes = [
  {path:'' , component:PrincipalComponent},
  {path:'aboutme', component:AboutComponent},
  {path:'projects', component:ProjetosComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'projects/index',component:IndexComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
