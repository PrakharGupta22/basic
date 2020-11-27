import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListBycategoryComponent } from './product-list-bycategory/product-list-bycategory.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'product-home',
    component: ProductsComponent,
    children: [
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'list-product', component: ProductListComponent },
      {
        path: 'list-bycategory',
        component: ProductListBycategoryComponent,
      },
      { path: 'update-product', component: UpdateProductComponent },
    ],
  },
  {
    path: 'category-home',
    component: CategoryComponent,
    children: [
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'category-details', component: CategoryDetailsComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
