import { Component } from '@angular/core';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faGithub
} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

toggleNavbarCollapsing() {
throw new Error('Method not implemented.');
}
navbarCollapsed: any;

constructor(library: FaIconLibrary) {
  library.addIcons(
    faFacebook,
    faGithub
  );
}

}
