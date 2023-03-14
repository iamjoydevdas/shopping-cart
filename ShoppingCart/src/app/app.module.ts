import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './shopping/product/product.component'
import { HttpClientModule  } from "@angular/common/http";
import { ProductService } from './shared/service/product.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path:"", component: LoginComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
