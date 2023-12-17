import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CitiesComponent } from './cities/cities.component';
import { UserdetailsComponent } from './users/userdetails/userdetails.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { CitydetailsComponent } from './cities/citydetails/citydetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    HomeComponent,
    ProductsComponent,
    CitiesComponent,
    UserdetailsComponent,
    ProductdetailsComponent,
    CitydetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
