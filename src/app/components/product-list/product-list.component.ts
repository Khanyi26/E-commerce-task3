// Fetching Products

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-list',
  //standalone: true,
  //imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: any[] = []; // Array to hold list of products

  constructor( 
    private http: HttpClient,
    private router: Router,//Inject router
    private authService: AuthService // Assuming you have auth(product) service
  ) {
    //this.fetchProducts();
    
    

  }

  fetchProducts() {
    this.http.get<any[]>('https://fakestoeapi.com/products')
    .subscribe(data => this.products = data);
  }

  ngOnInit(): void {
    this.fetchProducts ();
  }

  viewProduct(id: string ) {
    this.router.navigate(['/products]',id]); //Navigate to the product details page
  }

  editProduct(id: string){
    this.router.navigate(['/products]',id]);  //Navigate to product detials with product id
  }

  deleteProduct(id: string){
    this.http.delete(`https://fakestoeapi.com/products/${id}`) //Delete to product detials with product id
    .subscribe(() => this.fetchProducts())
  }



  //ngOnInit() {
   // this.http.get<any[]>('https://fakestoeapi.com/products').subscribe(
     // data => this.products = data,
      //error  => console.error('Failed to fetch products', error) 
    //); 
  //}


}
