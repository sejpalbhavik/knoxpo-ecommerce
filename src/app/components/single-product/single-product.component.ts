import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
