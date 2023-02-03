import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArabComponent } from './components/contact/locations/arab/arab.component';
import { AsiaComponent } from './components/contact/locations/asia/asia.component';
import { EuropeComponent } from './components/contact/locations/europe/europe.component';
import { USAComponent } from './components/contact/locations/usa/usa.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path:'',component:HomeComponent, pathMatch:'full' },
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent },
  { path:'contact', component:ContactComponent, children:[
    { path:'asia',component:AsiaComponent },
    { path:'europe',component:EuropeComponent },
    { path:'arab',component:ArabComponent },
    { path:'usa',component:USAComponent },
  ] },
  { path:'careers',component:CareersComponent},
  { path:'news',component:NewsComponent},
  { path:'login',component:LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
