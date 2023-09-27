import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',

})
export class AddProductComponent {
  formProduct = this.form.group({
    name: ['', Validators.required],
    price: [0],
    code: [''],
    releaseDate: [''],
    imageUrl: ['']
  })
  constructor(private form: FormBuilder, private productService: ProductsService, private router: Router) { }
  onhandlerSubmit() {
    this.productService.AddProduct(this.formProduct.value as IProducts).subscribe()
    alert("Product added successfully!")
    this.router.navigate(['/admin'])
  }
}
