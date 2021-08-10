import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpclient: HttpClient ) { }

  getAllProducts(): Observable<Product>{
    const productUrl = "http://localhost:3000/products";
    return this.httpclient.get<Product>(productUrl);
    }

    getCategories(): Observable<Category>{
      const getCategoriesUrl = "http://localhost:3000/categories";
      return this.httpclient.get<Category>(getCategoriesUrl);
    }

  createProduct(productBody): Observable<Product> {
  const productUrl = "http://localhost:3000/products";

  return this.httpclient.post<Product>(productUrl, productBody);
  }

  viewProduct(productId): Observable<Product>{
    const productUrl =  "http://localhost:3000/products/" + productId;
    return this.httpclient.get<Product>(productUrl);
    }

  updateProduct(productId, productBody): Observable<Product>{
      const productUrl =  "http://localhost:3000/products/" + productId;
      return this.httpclient.put<Product>(productUrl, productBody);
      }

  deleteProduct(productId): Observable<Product>{
      const productUrl =  "http://localhost:3000/products/" + productId;
      return this.httpclient.delete<Product>(productUrl);
      }

   searchCategoryProducts(categoryId): Observable<Product>{
       const productUrl = "http://localhost:3000/products?categoryId="+categoryId;
       return this.httpclient.get<Product>(productUrl);
      }

    searchDateProducts(dateParam): Observable<Product>{
      const productUrl = "http://localhost:3000/products/date="+dateParam;
      return this.httpclient.get<Product>(productUrl);
       }

}
