import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;

  constructor(private productService: ProductService) {}

  fetchProduct(myform: any) {
    let data = myform.value;
    let id: number = data.productId;

    this.product = this.productService.fetchProductById(id);
  }
}
