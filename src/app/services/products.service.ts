import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = `http://localhost:8080/api/products`;
  constructor(private http: HttpClient) { }


  getAll(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.API_URL);
  }
  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:8080/api/products?_sort=_id&_order=desc&_limit=8');
  }
  getAllPrice(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:8080/api/products?_sort=price&_order=asc&_limit=8');
  }
  getOne(id: string): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.API_URL}/${id}`);
  }

  AddProduct(product: IProducts): Observable<IProducts> {
    return this.http.post<IProducts>(this.API_URL, product)
  }
  UpdateProduct(product: IProducts): Observable<IProducts> {
    return this.http.put<IProducts>(`${this.API_URL}/${product._id}`, product)
  }
  DeleteProduct(id: number | string): Observable<IProducts> {
    return this.http.delete<IProducts>(`${this.API_URL}/${id}`)
  }
}
