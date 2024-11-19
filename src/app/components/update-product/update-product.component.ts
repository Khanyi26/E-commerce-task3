import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { response } from 'express';
import { error } from 'console';



@Component({
  selector: 'app-update-product',
  //standalone: true,
  //imports: [],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  //product = { tittle: '', price: 0, description: '', category: '', image: ''};
  @Input() productId: string = '';// Input product id
  @Output() productUpdated = new EventEmitter<any>(); // Emit event after updating product

  productForm: FormGroup; // FormGroup form for handling form

  constructor( 
    //private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService,
    private fb: FormBuilder
    ) {
      //Initialize the form
      this.productForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.min(0)]],
      });
    }

    //ngOnInit() {
      //const id = this.route.snapshot.paramMap.get('id');
      //this.http.get(`https://fakestoeapi.com/products/${id}`).subscribe(
        //data => this.product = data,
        //error  => console.error('Failed to fetch products', error) 
      //);
    //}

    ngOnInit(): void {
      if (this.productId) {
        this.loadProductDetails(this.productId);
      }
    }

    loadProductDetails(id: string): void {
      this.productService.getProductByID(id).subscribe((data) =>
      {
        this.productForm.patchValue({
          name: data.name,
          description: data.description,
          price: data.price,
        });
      });
    }


    //updateProduct(){
      //const id = this.route.snapshot.paramMap.get('id');
      //this.http.put(`https://fakestoeapi.com/products/${id}`, this.product).subscribe(
      //() => this.router.navigate(['/products']),
      //error => console.error ('Failed to fetch products', error) 
    //);
    //}
    // Method to handle form submission
    updateProduct(): void{
      if (this.productForm.invalid){
        return; //Prevent submission if the form is invalic
      }
  


    const updatedProduct = {
      ...this.productForm.value,
      id: this.productId
    };

    

    this.productService.updateProduct(this.productId, updatedProduct).subscribe((response) => {
      this.productUpdated.emit(response); //Emit updated product after succesful update
      this.router.navigate(['/products']); //Optionally navigate back 
      
    })
  }

}
