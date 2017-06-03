import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  products: Observable<any>;

  constructor(private http: Http) {
    this.products = this.http.get('/api/products')
      .map((res) => res.json());
  }

  ngOnInit() {
  }

}
