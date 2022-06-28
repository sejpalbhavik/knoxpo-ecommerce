import { Component, OnInit } from '@angular/core';
import {FetchApiService} from '../../services/fetch-api.service';
import { Router } from '@angular/router';

import { faSignIn, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  skeletonloader = true;

  category_data: any;
  sigal_data: any;
  popup = false
  name = 'Angular';

  faSignIn = faSignIn;
  faCartShopping = faCartShopping;
  faSearch = faSearch;
  faUser = faUser;

  constructor(private fetchApi: FetchApiService, private router: Router) { }

  ngOnInit() {
    this.fetchApi.getCategory().subscribe((data)=>{       
      this.category_data = data;

      console.log("header_data",this.category_data)
      this.skeletonloader = false;
    },error => console.error(error));

    this.fetchApi.getSigalProduct().subscribe((data)=>{       
      this.sigal_data = data;
  })
}

//   btnClick() {

//     console.log("click",this.btnClick)
//     this.router.navigateByUrl('/electronics');
// }

gotoPage(pageName: string){
  console.log("login",pageName)
    this.router.navigate([`${pageName}`])
}

gotoSignUp(){
  this.router.navigateByUrl('/sign-up')
}

}
