import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-product',
  //standalone: true,
  //imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent {
  product = { tittle: '', price: 0, description: '', category: '', image: ''};

  constructor( private http: HttpClient, private router: Router ) {}

  addProduct() {
    this.http.post('https://fakestoeapi.com/products', this.product).subscribe(
      () => this.router.navigate(['/products']),
      error => console.error ('Failed to fetch products', error) 
    );
  }

}
