import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{AuthGuardGuard} from './auth-guard.guard';
const routes: Routes = [
  {path:'' ,component: LoginComponent},
  {path:'home' ,component: HomeComponent,canActivate:[AuthGuardGuard]},
  {path: 'detailsComponent',component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
