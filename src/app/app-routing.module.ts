import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ClientsComponent } from './clients/clients.component';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ourproduct', component: OurproductComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component:BlogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
