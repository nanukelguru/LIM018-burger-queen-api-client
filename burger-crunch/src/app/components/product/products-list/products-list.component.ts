import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../product-interface'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products?: Product[];


  constructor(public productService:ProductService) {}

  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(data =>
      //  console.log(data)
      this.products= data

      // this.products.push(data)
    )
      console.log(this.products)

  //  console.log( this.productService.getAllProducts())
  }
}
