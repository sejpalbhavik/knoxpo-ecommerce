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
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WomensCategoryComponent } from './components/womens-category/womens-category.component';

const routes: Routes = [
  // {path: 'header', component: HeaderComponent},
  // {path: 'login', component: LoginPageComponent},
  // {path: 'banner', component: BannerComponent},
  {path: '', component: HomePageComponent, children:[
    {
      path: 'header', component: HeaderComponent,
    },
    {
      path: 'banner', component: BannerComponent
    },
    {
      path: 'footer', component: FooterComponent
    },
  ]
},

//   // Category Section

  {path: `electronics`, component: ElectronicsCategoryComponent},
  {path: `jewelery`, component: JewelleryCategoryComponent},
  {path: `men's clothing`, component: MensCategoryComponent},
  {path: `women's clothing`, component: WomensCategoryComponent},

  {path: `single-product/:id`, component: SingleProductComponent},

  //sign up

  {path: `sign-up`, component: SignUpComponent},
  {path: `login`, component: LoginPageComponent}
  
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

