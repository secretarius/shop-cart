import { ProductService } from './../catalog/product.servise';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../catalog/product';
import { Router } from '@angular/router';

@Component({
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public products: IProduct[];
  private unsubscribeItem: Subscription;
  public prodCount: number;

  constructor(private prodServise: ProductService, private router: Router) {}

  public ngOnInit(): void {
    this.unsubscribeItem = this.prodServise.getProdToCart()
    .subscribe(newProdItems => {
      this.products = newProdItems;
      this.prodCount = 0;
      this.products.forEach((prodItem) => this.prodCount += prodItem.price);
    });
  }

  @HostListener('window:beforeunload')
  public beforeUnloadHandler() {
    if(this.products.length !== 0) {
      localStorage.setItem("products", JSON.stringify(this.products));
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribeItem.unsubscribe();
  }

  public deleteProduct(index: number): void {
    this.prodServise.deleteProductFromCart(index);
  }

  public onBack() {
    this.router.navigate(['/products']);
  }

}
