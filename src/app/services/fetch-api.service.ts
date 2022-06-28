import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

id: any
  constructor(private http: HttpClient) { }

getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=12'); 
}

getSigalProduct(){
  return this.http.get('https://fakestoreapi.com/products/1'); 
}

getCategory(){
  return this.http.get('https://fakestoreapi.com/products/categories');
}

getJewellery(){
  return this.http.get('https://fakestoreapi.com/products/category/jewelery')
}

getElectronics(){
  return this.http.get('https://fakestoreapi.com/products/category/electronics')
}

getMenClothing(){
  return this.http.get(`https://fakestoreapi.com/products/category/men's clothing`)
}

getWomenClothing(){
  return this.http.get(`https://fakestoreapi.com/products/category/women's clothing`)
}

// getSigalData(id:any){
//   return this.http.get(`https://fakestoreapi.com/products/`);
// }
}
