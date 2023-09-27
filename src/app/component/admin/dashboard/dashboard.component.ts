import { Component, Input } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent {
  products: IProducts[] = [];
  constructor(private productService: ProductsService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data
      }
    })
  }
  SearchText: string = '';
  RemoveProduct(id: any) {
    if (confirm('Are you sure you want to delete this product?') === true) {
      this.productService.DeleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      })
    } else {
      return;
    }
  }
}
