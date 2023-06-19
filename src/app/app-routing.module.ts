import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path:"app",
      component:AppComponent
      
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'services',
      component:ServicesComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'home',
      component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
