import { Component, Input, OnInit } from '@angular/core';

import {FetchApiService} from '../../services/fetch-api.service';

import { faMessage, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics-category',
  templateUrl: './electronics-category.component.html',
  styleUrls: ['./electronics-category.component.scss']
})
export class ElectronicsCategoryComponent implements OnInit {

  datas: any;
  cate_data: any;
  category_data: any;
  signal_data: any = [];
  isReadMore = true;

  isHidden = true;

  faMessage  = faMessage;
  faCartShopping = faCartShopping;
  faStar = faStar;
  skeletonloader = true;

  showButton: boolean | undefined;

  constructor(private fetchApi: FetchApiService, private router: Router) { }

  ngOnInit() {
    this.fetchApi.getElectronics().subscribe((data)=>{       
      this.datas = data;  

      this.skeletonloader = false;
      console.log("data", data);
  });
  }

  showButtons(show: boolean){
    this.showButton = show;
  }
  
  showText() {
    this.isReadMore = !this.isReadMore
  }
  
  
  goProductDetails(id:number){
  
    this.router.navigate(['/single-product',id]);
    console.log("getData",id)
  }

}
