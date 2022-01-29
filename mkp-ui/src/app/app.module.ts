import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot({
      provideSwal: () => import('sweetalert2/dist/sweetalert2.js')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
