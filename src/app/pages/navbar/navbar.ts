import { Component, ViewEncapsulation } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, NgbCollapseModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',

  encapsulation: ViewEncapsulation.None

})
export class Navbar {
  isCollapsed = true;

  openDropdown: string | null = null;

  toggleDropdown(menu: string) {
    if (this.openDropdown === menu) {
      this.openDropdown = null;
    } else {
      this.openDropdown = menu;
    }
  }

  scrollToFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

}





