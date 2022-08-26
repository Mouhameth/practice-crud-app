import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.api
  constructor(private http: HttpClient) { }

  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, product)
  }

  public updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${product.ID}`, product)
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`)
  }

  public deleteProduct(product:Product): Observable<any> {
        
    return this.http.delete<any>(`${this.baseUrl}/${product.ID}`)
  }
}
