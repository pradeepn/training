import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { HelpComponent } from './help/help.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
  { path: 'about-us', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactComponent, canActivate: [AuthGuard]  },
  // { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heros', canActivate: [AuthGuard],
    loadChildren: () => import('./heros/heros.module').then(mod => mod.HerosModule), data: { title: 'Heroes List' }},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
