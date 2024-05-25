import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router) {}
  currentUrl:string = '';

  ngOnInit(): void {
  }
  
  isOpened:boolean = true;

  open() {
    this.isOpened = true;
  }
  close() {
    this.isOpened = false;
  }

  get url() {
    return this.router.url;
  }

  navigateTo(endpoint:string) {
    this.router.navigateByUrl(endpoint);
  }
}
