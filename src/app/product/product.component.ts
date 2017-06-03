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
    // HTTP请求的发送,是由subscribe方法来触发的,而不是上面的get方法触发的
    this.dataSource.subscribe(
      (data) => this.products = data
    );
  }
}
