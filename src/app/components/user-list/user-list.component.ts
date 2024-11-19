import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  //standalone: true,
  //imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent  implements OnInit{
  users: any[] = [];

  constructor( private http: HttpClient ) {}

  ngOnInit() {
    this.http.get<any[]>('https://fakestoeapi.com/users').subscribe(
      data => this.users = data,
      error  => console.error('Failed to fetch users', error) 
    ); 
  }


}
