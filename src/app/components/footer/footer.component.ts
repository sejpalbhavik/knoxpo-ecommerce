import { Component, OnInit } from '@angular/core';

import {FetchApiService} from '../../services/fetch-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  category_data: any;
  constructor(private fetchApi: FetchApiService, private router: Router) { }

  ngOnInit() {

    this.fetchApi.getCategory().subscribe((data)=>{       
      this.category_data = data;
    },error => console.error(error));
  }

  gotoPage(pageName: string){
      this.router.navigate([`${pageName}`])
  }
  

}
