import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { LoginpageComponent } from './shared/component/loginpage/loginpage.component';
import { EdituserComponent } from './shared/component/users/edituser/edituser.component';

import { ProducteditComponent } from './shared/component/products/productedit/productedit.component';
import { UsernotfoundComponent } from './shared/component/usernotfound/usernotfound.component';
import { NavDirective } from './shared/direstives/nav.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/component/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    NavbarComponent,
    UsersComponent,
    ProductComponent,
    UserComponent,
    LoginpageComponent,
    EdituserComponent,
   
    ProducteditComponent,
        UsernotfoundComponent,
        NavDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
