import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { ElectronicsCategoryComponent } from './components/electronics-category/electronics-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JewelleryCategoryComponent } from './components/jewellery-category/jewellery-category.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MensCategoryComponent } from './components/mens-category/mens-category.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WomensCategoryComponent } from './components/womens-category/womens-category.component';

const routes: Routes = [
//   {path: 'header', component: HeaderComponent},
//   {path: 'login', component: LoginPageComponent, outlet: 'login'},
//   {path: 'banner', component: BannerComponent},
//   {path: '', component: HomePageComponent},
//   {path: 'footer', component: FooterComponent},

//   // Category Section

//   {path: 'electronics', component: ElectronicsCategoryComponent},
//   {path: 'jewellery', component: JewelleryCategoryComponent},
//   {path: 'mens-catelog', component: MensCategoryComponent},
//   {path: 'women-catelog', component: WomensCategoryComponent},
  
// // Category Section
//   {path: 'categories', component: WomensCategoryComponent},

//   //single product info

//   {
//     path:'single-product' , component: SingleProductComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

