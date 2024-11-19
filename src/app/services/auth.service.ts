import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoeapi.com/products' // fakestore API

  constructor(private http: HttpClient) { }
  
  //Get product by id
  getProductByID(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
