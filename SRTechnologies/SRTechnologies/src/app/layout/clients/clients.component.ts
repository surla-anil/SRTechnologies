import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {HeaderComponent} from "./../header/header.component";
import {FooterComponent} from "./../footer/footer.component"

import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,MatIconModule,HeaderComponent,FooterComponent,SideNavComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
