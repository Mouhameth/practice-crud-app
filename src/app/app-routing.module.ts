import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-quizz.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [{path:"", redirectTo:"home", pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"home-admin",component:HomeAdminComponent,canActivate:[LoginGuard]},
{path:"crud-produit",component:CrudProductComponent,canActivate:[LoginGuard]},
{path:"add-produit",component:AddProductComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
