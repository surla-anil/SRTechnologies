import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule,MatSidenavModule, MatButtonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSlideOut = true;
  showFiller = false;
  constructor(private router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onClients(){
    this.router.navigate(['/layout/clients']);
  }

  onAbout(){
    this.router.navigate(['/layout/about-us']);
  }

  onService(){
    this.router.navigate(['/layout/service']);
  }
  onContact(){
    this.router.navigate(['/layout/contact-us']);
  }
  onDash(){
    this.router.navigate(['/layout/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/layout/profile']);
  }
  onHistory(){
    this.router.navigate(['/layout/history']);
  }
  onLogout(){
    this.router.navigate(['/layout/login']);
  }
}
