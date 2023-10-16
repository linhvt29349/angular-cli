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
  productPrices!: IProducts[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService

  ) {
    this.route.params.subscribe(({ id }) => {
      this.productService.getOne(id).subscribe({
        next: (data: any) => this.product = data.data,
        error: (err) => console.log(err.message)
      })
    }
    )
  }
}
