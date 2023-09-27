import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberPipe } from './change-number.pipe';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AccountComponent } from './component/admin/account/account.component';
import { DetailProductComponent } from './component/client/detail-product/detail-product.component';
import { ListProductsComponent } from './component/client/list-products/list-products.component';
import { SortPipe } from './sort.pipe';
import { NotFoundComponent } from './component/client/not-found/not-found.component';
import { ProductsComponent } from './component/client/products/products.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/admin/update-product/update-product.component';
import { AddUserComponent } from './component/admin/add-user/add-user.component';
import { UpdateUserComponent } from './component/admin/update-user/update-user.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxPipe,
    ChangeNumberPipe,
    AdminComponent,
    ClientComponent,
    DashboardComponent,
    AccountComponent,
    DetailProductComponent,
    ListProductsComponent,
    SortPipe,
    NotFoundComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddUserComponent,
    UpdateUserComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
