import {Injectable} from '@angular/core';
import {Product} from '../classes/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Blue item', price: 144.09, colors: ['blue']},
      <Product>{id: 2, name: 'Green and gray', price: 12.09, colors: ['green', 'gray']},
      <Product>{id: 3, name: 'Green item', price: 34.09, colors: ['green']},
      <Product>{id: 4, name: 'Blue and gray', price: 45.09, colors: ['blue', 'gray']},
      <Product>{id: 5, name: 'Green and blue', price: 44.09, colors: ['green', 'blue']},
      <Product>{id: 6, name: 'Green and blue', price: 65.09, colors: ['green', 'blue']},
      <Product>{id: 7, name: 'Gray', price: 98.09, colors: ['gray']},
      <Product>{id: 8, name: 'Blue', price: 123.09, colors: ['blue']},
      <Product>{id: 9, name: 'All colors', price: 210.09, colors: ['gray', 'blue', 'green']},
    ]);
  }
}
