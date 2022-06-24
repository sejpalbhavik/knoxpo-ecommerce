import { Component } from '@angular/core';
import {FetchApiService} from './services/fetch-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fake_api_assignment';
}
