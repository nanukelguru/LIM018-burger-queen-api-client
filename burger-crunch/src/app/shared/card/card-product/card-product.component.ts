import { Component, Input, Sanitizer, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/components/product/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() data!: Product;

  public products!: Product[];

  constructor(
    public productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;
  }
  // public get safeUrlPic() {return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.image);
  // }
}
