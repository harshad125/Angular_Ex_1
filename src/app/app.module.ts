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
import { HttpClientModule } from '@angular/common/http';
import { UserupdateComponent } from './users/userupdate/userupdate.component';

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
    CitydetailsComponent,
    UserupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
