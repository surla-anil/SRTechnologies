import { Component } from '@angular/core';
import {FooterComponent} from "./../footer/footer.component"
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,MatIconModule,HeaderComponent,FooterComponent,SideNavComponent,ReactiveFormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
