import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AccountComponent } from './component/admin/account/account.component';
import { ListProductsComponent } from './component/client/list-products/list-products.component';
import { DetailProductComponent } from './component/client/detail-product/detail-product.component';
import { NotFoundComponent } from './component/client/not-found/not-found.component';
import { ProductsComponent } from './component/client/products/products.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component';
import { AddUserComponent } from './component/admin/add-user/add-user.component';
import { UpdateUserComponent } from './component/admin/update-user/update-user.component';
import { ProductFormComponent } from './component/admin/product-form/product-form.component';
import { authGuard } from './auth.guard';

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
    path: "admin", component: AdminComponent, canActivate: [authGuard], children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "dashboard/add", component: ProductFormComponent },
      { path: "dashboard/update/:id", component: ProductFormComponent },

      { path: "account", component: AccountComponent },
      { path: "account/add", component: AddUserComponent },
      { path: "account/update/:id", component: UpdateUserComponent },

      { path: "**", component: NotFoundComponent }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
