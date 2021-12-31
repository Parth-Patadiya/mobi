import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { StoreComponent } from './component/store/store.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'store', component: StoreComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'register', component: RegisterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
