import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from '../../../../../core/models/menu.model';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone:true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    AngularSvgIconModule,
    RouterLink,
    TranslateModule
],
})
export class SidebarComponent implements OnInit{

  constructor(public translate: TranslateService, public menuService:MenuService){}
  ngOnInit(): void {
  }

  toggleLang(lang: string) {
    this.translate.use(lang);
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

}
