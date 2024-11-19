import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service'; 
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  //standalone: true,
  //imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  totalProducts: number = 0;
  totalUsers: number = 0;

  constructor(private productService: ProductService){} //Inject Product Service

  ngOnInit(): void {
    this.fetchProductCount();
    this.fetchUSerCount();
  }

  // Fetch the total number of product from the API using ProductService
  fetchProductCount(): void{
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.totalProducts = products.length;
      },
      (error) => {
        console.error('Error on fetching products:', error)
      }
    );
  }

  // Fetch the total users (if productService alszo handles user-related API requests)
  fetchUSerCount(): void {
    this.productService.getAllUsers().subscribe(
      (users) => {
        this.totalUsers = users.length;
      },
      (error) => {
        console.error('Error on fetching products:', error)
      }
    );
  }
}
