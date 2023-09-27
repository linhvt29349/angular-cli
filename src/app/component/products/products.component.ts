import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent {
  products: IProducts[] = [];
  constructor(private productService: ProductsService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data
      }
    })
  }
}
