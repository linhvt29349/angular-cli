import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent {
  products!: IProducts[];

  constructor(private productService: ProductsService, private router: Router) { }
  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data: any) => { this.products = data.data }
    })

  }

  SearchText: string = '';
  RemoveProduct(id: any) {
    if (confirm('Are you sure you want to delete this product?') === true) {
      this.productService.DeleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product._id !== id);
      })
    } else {
      return;
    }
  }
  logout() {
    const a = window.confirm('Are you sure you want to log out?');
    if (a) {
      localStorage.removeItem("userInfo")
      this.router.navigate(['/']);
    }
  }
}
