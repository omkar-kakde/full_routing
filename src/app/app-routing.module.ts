import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { LoginpageComponent } from './shared/component/loginpage/loginpage.component';
import { EdituserComponent } from './shared/component/users/edituser/edituser.component';
import { ProducteditComponent } from './shared/component/products/productedit/productedit.component';
import { AuthgaurdGuard } from './shared/service/authgaurd.guard';
import { UsernotfoundComponent } from './shared/component/usernotfound/usernotfound.component';
import { UseroleGuard } from './shared/service/userole.guard';

const routes: Routes = [
  {path:'', component:LoginpageComponent },
  {path:'home', component:HomeComponent},
  {path : 'users', component : UsersComponent,
  canActivate : [AuthgaurdGuard]  },
                               
  {path : 'users/:userId', component:UserComponent, },
  {path : 'users/:userId/edit', component : EdituserComponent ,
  
},
  // {path : 'users/2', component:UserComponent},
  // {path : 'users/3', component:UserComponent},
  {path:'about', component:AboutComponent },
  {path:'products', component:ProductsComponent,
  canActivate : [UseroleGuard],
   data : {
    userRole : "ADMIN"
   },
  
 }, 
  {path:'products/:id', component:ProductComponent },
  {path:'products/:id/edit', component: ProducteditComponent },
  {path:'usernotfount', component : UsernotfoundComponent,
  data : {errorms : 'This page is not available'}},
  {path :'**',redirectTo: 'usernotfount'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

