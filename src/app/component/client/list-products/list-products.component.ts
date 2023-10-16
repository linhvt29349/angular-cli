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
    private productService: ProductsService, private productPricesService: ProductsService) {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        this.products = data.data
      }
    }),
      this.productPricesService.getAllPrice().subscribe({
        next: (data: any) => {
          this.productPrices = data.data
        }
      });
  }

}
