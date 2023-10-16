import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberPipe } from './change-number.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AccountComponent } from './component/admin/account/account.component';
import { DetailProductComponent } from './component/client/detail-product/detail-product.component';
import { ListProductsComponent } from './component/client/list-products/list-products.component';
import { SortPipe } from './sort.pipe';
import { NotFoundComponent } from './component/client/not-found/not-found.component';
import { ProductsComponent } from './component/client/products/products.component';
import { AddUserComponent } from './component/admin/add-user/add-user.component';
import { UpdateUserComponent } from './component/admin/update-user/update-user.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './component/admin/product-form/product-form.component';
import { AuthInterceptor } from './auth.interceptor';
import { authGuard } from './auth.guard';

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
    ProductFormComponent,
    AddUserComponent,
    UpdateUserComponent,
    SigninComponent,
    SignupComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
