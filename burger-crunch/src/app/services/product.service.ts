import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/product/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [];
  public urlAPI: string = 'http://localhost:3000';

  get arrayProducts(){
    return[...this.products]
  }

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.urlAPI + '/products',{
      headers: {
        Authorization:"Bearer EsUnSecreto"
      }
    });


  }

}
  console.log('Hola');
