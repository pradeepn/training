import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthgruardGuard } from './guards/authgruard.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthgruardGuard]},
  { path: 'about-us', component: AboutComponent, canActivate: [AuthgruardGuard] },
  { path: 'contact-us', component: ContactComponent, canActivate: [AuthgruardGuard]  },
  // { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heros', canActivate: [AuthgruardGuard],
    loadChildren: () => import('./heros/heros.module').then(mod => mod.HerosModule), data: { title: 'Heroes List' }},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
