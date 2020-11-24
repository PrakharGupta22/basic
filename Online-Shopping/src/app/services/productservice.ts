import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  category: Category = new Category('101', 'golf');
  products: Product[] = [];
  generateId(): number {
    return this.products.length + 1;
  }
  addProduct(product: Product): Product {
    let id = this.generateId();
    product.productId = id;
    this.products.push(product);
    return product;
  }
  fetchProducts(): Product[] {
    return this.products;
  }
  fetchProductById(id: number): any {
    for (let product of this.products) {
      if (product.productId === id) {
        return product;
      }
    }
    return null;
  }
}
