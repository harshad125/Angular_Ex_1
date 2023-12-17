import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CitiesComponent } from './cities/cities.component';
import { UserdetailsComponent } from './users/userdetails/userdetails.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { CitydetailsComponent } from './cities/citydetails/citydetails.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"cities",
    component:CitiesComponent
  },
  {
    path:"users/:id",
    component:UserdetailsComponent
  },{
    path:"products/:id",
    component:ProductdetailsComponent
  },{
    path:"cities/:id",
    component:CitydetailsComponent
  }
  
  // {
  //   path:"**",
  //   component:HomeComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
