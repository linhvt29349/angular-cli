import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';

import { AccountComponent } from './component/admin/account/account.component';
import { ListProductsComponent } from './component/client/list-products/list-products.component';
import { DetailProductComponent } from './component/client/detail-product/detail-product.component';
import { NotFoundComponent } from './component/client/not-found/not-found.component';
import { ProductsComponent } from './component/client/products/products.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/admin/update-product/update-product.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component';
import { AddUserComponent } from './component/admin/add-user/add-user.component';
import { UpdateUserComponent } from './component/admin/update-user/update-user.component';

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "", component: ClientComponent, children: [
      { path: "", component: ListProductsComponent },
      { path: "products/detail/:id", component: DetailProductComponent },
      { path: "products", component: ProductsComponent }
    ]
  },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "products/add", component: AddProductComponent },
      { path: "products/update/:id", component: UpdateProductComponent },
      {
        path: "account", component: AccountComponent, children: [
          { path: "add", component: AddUserComponent },
          { path: "update/:id", component: UpdateUserComponent }
        ]
      },

    ]
  },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
