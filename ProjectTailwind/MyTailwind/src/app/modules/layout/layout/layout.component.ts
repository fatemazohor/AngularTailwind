import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
    imports: [
        SidebarComponent,
        NavbarComponent,
        RouterOutlet,
        FooterComponent,
    ],
    providers: [MenuService]
})
export class LayoutComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }
}
