import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  constructor  ( private router:Router) {}
  //title = 'ecommerce-dashboard';

  ngOnInit() {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }
      
    })
    
  }
}
