import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',

})
export class ListProductsComponent {
  products: IProducts[] = [];
  productPrices: IProducts[] = [];
  constructor(
    private productService: ProductsService, private productPrice: ProductsService) {
    this.productService.getProductNew().subscribe({
      next: (data) => {
        this.products = data
      }
    }),
      this.productPrice.getProductPrice().subscribe({
        next: (data) => { this.productPrices = data }
      })
  }

}
