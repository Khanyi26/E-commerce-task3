import {RouterModule, Routes, NavigationEnd } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard }  from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';




 export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'products/add', component: AddProductComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'products/edit/:id', component: UpdateProductComponent},
    {path: 'user', component: UserListComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'} // Wildcard route for 404 page
];

@NgModule({
    declarations: [
        LoginComponent,
        ProductListComponent,
        ProductDetailsComponent,
        UpdateProductComponent,
        DashboardComponent,
        UserListComponent
    ],

    imports: [
        RouterModule.forRoot(routes),
        AppComponent,
        //DashboardComponent,
        FormsModule,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
      

    ],
    exports: [RouterModule],

    providers:[],
    bootstrap: [DashboardComponent],
    
})

export class AppRoutingModule {}
//export const routes: Routes = [];
