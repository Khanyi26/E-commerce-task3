import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  //standalone: true,
  //imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor( private http: HttpClient, private route: ActivatedRoute ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://fakestoeapi.com/products/${id}`).subscribe(
      data => this.product = data,
      error  => console.error('Failed to fetch products', error) 
    ); 
  }

}
