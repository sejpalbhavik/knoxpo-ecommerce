import { Component, OnInit } from '@angular/core';
import {FetchApiService} from '../../services/fetch-api.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { faCartShopping, faBagShopping, faNewspaper, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  faCartShopping  = faCartShopping;
  faBagShopping = faBagShopping;
  faNewspaper = faNewspaper;
  faStar = faStar;

  datas: any;

  id: any;

  constructor(private fetchApi: FetchApiService,private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
  //   this.fetchApi.getSigalData(this.id).subscribe((data)=>{       
  //     this.datas = data;  

  //     console.log("data", data);
  // })

  this.httpClient.get(`https://fakestoreapi.com/products/${this.id}`).subscribe(data =>{
    this.datas = data;

    console.log("single_data",data)
  })
}
}


