import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; //存储当前商品数组到购物车中

  constructor(
    private http: HttpClient
  ) { }

  //定义商品添加到购物车方法
  addToCart(product){
    this.items.push(product);
  }

  //获取购物车商品
  getItems(){
    return this.items;
  }

  //清除购物车商品
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}