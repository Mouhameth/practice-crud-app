import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { productReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effect';
import { AddProductComponent } from './components/add-product/add-quizz.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CrudProductComponent,
    HomeAdminComponent,
    NavbarAdminComponent,
    AddProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({productState:productReducer}),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
