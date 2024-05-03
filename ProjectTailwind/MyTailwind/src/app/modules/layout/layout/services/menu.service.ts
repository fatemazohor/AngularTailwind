import { Injectable, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem, SubMenuItem } from '../../../../core/models/menu.model';
import { Router } from '@angular/router';
import { Menu } from '../../../../core/constants/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  private _showSidebar = signal(true);
  private _showMobileMenu = signal(false);
  private _publicPagesMenu = signal<MenuItem[]>([]);
  private _subscription = new Subscription();
  constructor(private router: Router) {
    /** Set dynamic menu */
    this._publicPagesMenu.set(Menu.pages); }
    get showSideBar() {
      return this._showSidebar();
    }
  
    get showMobileMenu() {
      return this._showMobileMenu();
    }
  
    get publicPagesMenu() {
      return this._publicPagesMenu();
    }
  
    set showSideBar(value: boolean) {
      this._showSidebar.set(value);
    }
    set showMobileMenu(value: boolean) {
      this._showMobileMenu.set(value);
    }
  
    public toggleSidebar() {
      this._showSidebar.set(!this._showSidebar());
    }
  
    public toggleMenu(menu: any) {
      this.showSideBar = true;
      menu.expanded = !menu.expanded;
    }
  
    public toggleSubMenu(submenu: SubMenuItem) {
      submenu.expanded = !submenu.expanded;
    }
  
    private expand(items: Array<any>) {
      items.forEach((item) => {
        item.expanded = this.isActive(item.route);
        if (item.children) this.expand(item.children);
      });
    }
  
    private isActive(instruction: any): boolean {
      return this.router.isActive(this.router.createUrlTree([instruction]), {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
    }
  
    ngOnDestroy(): void {
      this._subscription.unsubscribe();
    }
}
