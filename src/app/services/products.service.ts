import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = ` http://localhost:3000/products`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:3000/products?_sort=id&_order=desc');
  }
  getOne(id: number | string): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.API_URL}/${id}`);
  }
  getProductNew(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:3000/products/?_limit=4&_sort=id&_order=desc');
  }
  getProductPrice(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:3000/products/?_limit=4&_sort=price&_order=asc');
  }
  AddProduct(product: IProducts): Observable<IProducts> {
    return this.http.post<IProducts>(this.API_URL, product)
  }
  UpdateProduct(product: IProducts): Observable<IProducts> {
    return this.http.put<IProducts>(`${this.API_URL}/${product.id}`, product)
  }
  DeleteProduct(id: number | string): Observable<IProducts> {
    return this.http.delete<IProducts>(`${this.API_URL}/${id}`)
  }
}
