import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {HeaderComponent} from "./../header/header.component";
import {FooterComponent} from "./../footer/footer.component"

import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,HeaderComponent,FooterComponent,SideNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
