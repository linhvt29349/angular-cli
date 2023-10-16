import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',

})
export class ProductFormComponent {
  product!: IProducts;
  formProduct = this.form.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['', [Validators.required]],
    createdAt: ['', [Validators.required]],
    images: ['']
  })
  mode: "create" | "update" = "create";

  constructor(
    private form: FormBuilder,
    private productService: ProductsService,
    private router: ActivatedRoute,
    private navigatedRouter: Router,

  ) { }

  async ngOnInit() {
    this.router.params.subscribe(({ id }) => {
      if (id) {
        this.mode = "update";
        this.productService.getOne(id).subscribe({
          next: (result: any) => {
            this.product = result.data;
            this.formProduct.patchValue(result.data)
          }
        })
      }
    })

  }


  async onhandlerSubmit() {
    if (this.formProduct.invalid) return;

    if (this.mode === 'create') {
      try {

        await lastValueFrom(this.productService.AddProduct(this.formProduct.value as IProducts))
        alert("Add product successfully!");
        this.navigatedRouter.navigate(['/admin'])

      } catch (error: any) {
        console.log(error.message);
      }
    }
    if (this.mode === "update") {
      try {
        const productUpdate = { ...this.product, ...this.formProduct.value }
        await lastValueFrom(this.productService.UpdateProduct(productUpdate as IProducts))
        alert("Update product successfully!");
        this.navigatedRouter.navigate(['/admin'])
      } catch (error: any) {
        console.log(error.message);

      }
    }
  }
}
