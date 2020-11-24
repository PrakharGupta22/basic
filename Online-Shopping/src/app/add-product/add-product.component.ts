import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: Product | undefined;
  constructor(private productService: ProductService) {}
  addProduct(myform: any) {
    let data = myform.value;
    this.product = new Product(
      0,
      data.productName,
      data.price,
      data.color,
      data.dimension,
      data.specification,
      data.manufacturer,
      data.quantity,
      data.category
    );
    this.productService.addProduct(this.product);
    myform.reset();
  }
}
