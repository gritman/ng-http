import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; // 手工引入这个包

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products= [];

  // 自动注入Http模块,因为其provider已经在Http模块中声明并且import进来了
  constructor(private http: Http) {
    // 因为拿到的是Response类型,所以要调用json()来转化
    this.dataSource = this.http.get('/api/products')
      .map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.products = data
    );
  }
}
