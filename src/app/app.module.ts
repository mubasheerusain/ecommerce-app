import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormComponent } from './components/form/form.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    AddProductComponent,
    AdminProductComponent,
    LoginComponent,
    SignupComponent,
    FormComponent,
    ResetpasswordComponent,
    ProductFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
