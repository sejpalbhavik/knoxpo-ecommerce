import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { ElectronicsCategoryComponent } from './components/electronics-category/electronics-category.component';
import { JewelleryCategoryComponent } from './components/jewellery-category/jewellery-category.component';
import { MensCategoryComponent } from './components/mens-category/mens-category.component';
import { WomensCategoryComponent } from './components/womens-category/womens-category.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleProductComponent } from './components/single-product/single-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    SignUpComponent,
    ElectronicsCategoryComponent,
    JewelleryCategoryComponent,
    MensCategoryComponent,
    WomensCategoryComponent,
    CartComponent,
    CategoriesComponent,
    SingleProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
