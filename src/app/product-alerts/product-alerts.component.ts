import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //定义一个带有@Input()装饰器的product属性，该装饰器指出其属性值是从该组件的父组件商品列表组件中传入的
  @Input() product; 

  //使用@Output()装饰器和一个事件发射器EventEmitter()实例定义一个notify属性，可在商品提醒组件在notify属性发生变化时发出事件
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}