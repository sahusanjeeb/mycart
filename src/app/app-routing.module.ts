import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'cart', 
  loadChildren: () => import('./modules/cart/cart.module').then(m=> m.CartModule)},
  {path:'products', 
  loadChildren: () => import('./modules/product/product.module').then(m=> m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
