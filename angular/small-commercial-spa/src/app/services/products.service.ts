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
      <Product>{id: 1, name: 'Blue item', price: 144.09, colors: ['blue'], picture: '../../assets/images/banana.jpg'},
      <Product>{id: 2, name: 'Green and gray', price: 12.09, colors: ['green', 'gray'], picture: '../../assets/images/abacate.jpg'},
      <Product>{id: 3, name: 'Green item', price: 34.09, colors: ['green'], picture: '../../assets/images/kiwi.jpg'},
      <Product>{id: 4, name: 'Blue and gray', price: 45.09, colors: ['blue', 'gray'], picture: '../../assets/images/laranja.jpg'},
      <Product>{id: 5, name: 'Green and blue', price: 44.09, colors: ['green', 'blue'], picture: '../../assets/images/maca.jpg'},
      <Product>{id: 6, name: 'Green and blue', price: 65.09, colors: ['green', 'blue'], picture: '../../assets/images/maracuja.jpg'},
      <Product>{id: 7, name: 'Gray', price: 98.09, colors: ['gray'], picture: '../../assets/images/melancia.jpg'},
      <Product>{id: 8, name: 'Blue', price: 123.09, colors: ['blue'], picture: '../../assets/images/morango.jpg'},
      <Product>{id: 9, name: 'All colors', price: 210.09, colors: ['gray', 'blue', 'green'], picture: '../../assets/images/pera.jpg'},
    ]);
  }
}
