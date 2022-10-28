import { Component, Input, Sanitizer, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/components/product/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/app/components/orders/order-list/order-interface'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() data!: Product;

  public qty: number;
  public order: Order = {
    _id:'',
    products:[],
    total:0

  };
  public products!: Product[];
  constructor(
    public productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;
  }
  increaseQty(product: Product) {
    this.qty = product.qty +1;
    product.subTotal= this.qty * product.price
    this.order.total = this.order.total + product.subTotal
  }
}
