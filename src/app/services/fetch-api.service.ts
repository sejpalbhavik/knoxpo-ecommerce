import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products?limit=12'); 
}

getCategory(){
  return this.http.get('https://fakestoreapi.com/products/categories');
}

getSignal(){
  return this.http.get('https://fakestoreapi.com/products/1');
}
}
