import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./admin/product-list/product-list.component";
import {ProductDetailComponent} from "./admin/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'admin/product-list', component: ProductListComponent},
  {path: 'admin/product-detail', component: ProductDetailComponent},
  {path: 'admin/product-detail/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
