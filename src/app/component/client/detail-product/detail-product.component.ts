import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',

})
export class DetailProductComponent {
  product!: IProducts;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.route.params.subscribe(({ id }) => {
      this.productService.getOne(id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.log(err.message)
      })
    }
    )

  }
}
