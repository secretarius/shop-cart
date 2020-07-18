import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/products.json';
  private cartProductSubject = new BehaviorSubject([]);
  private prodForShopingCart = [];

  constructor(private http: HttpClient) {
    const fromLockalSt = JSON.parse(localStorage.getItem('products'));
    if( fromLockalSt !== null ) {
      this.prodForShopingCart = fromLockalSt;
      this.cartProductSubject.next(this.prodForShopingCart);
    }
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }

  public setProdToCart(prod: IProduct): void {
    this.prodForShopingCart.push(prod);
    this.cartProductSubject.next(this.prodForShopingCart);
  }

  public getProdToCart(): Observable<IProduct[]> {
    return this.cartProductSubject.asObservable();
  }

  public deleteProductFromCart(id: number): void {
    this.prodForShopingCart.splice(id,1);
    this.cartProductSubject.next(this.prodForShopingCart);
  }

}
