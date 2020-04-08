import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: ""  , pathMatch : 'full', redirectTo : '/home'},
  { path: ""  ,  component : HomeComponent },
  // { path: 'home' , redirectTo : 'th/home'  },
  { path: 'home' , component : HomeComponent  },
  // {
  //   path: '', component: HomeComponent
  // },
  // {
  //   path: 'home/:Language', component: HomeComponent
  // },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
