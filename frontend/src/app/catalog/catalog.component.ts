import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.servise';

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public pageTitle = 'Product List';
  public products: IProduct[];

  constructor(private productServise: ProductService) { }

  public buyProd(prod: IProduct): void {
    this.productServise.setProdToCart(prod);
  }

  public ngOnInit(): void {
    this.productServise.getProducts().subscribe(data => this.products = data);
   }

}
