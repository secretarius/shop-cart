import { ProductService } from './catalog/product.servise';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'catalog', component: CatalogComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: '', redirectTo: 'catalog', pathMatch: 'full'},
      {path: '**', redirectTo: 'catalog', pathMatch: 'full'},
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
