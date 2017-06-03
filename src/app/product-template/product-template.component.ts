import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  products: Observable<any>;

  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456'); // 身份认证,放到Request Headers里面做请求的头
    this.products = this.http.get('/api/products', {headers: myHeaders})
      .map((res) => res.json());
  }

  ngOnInit() {
  }

}
