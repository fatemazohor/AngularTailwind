import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { NgZorroCustomModule } from '../../../../../shared/ng-zorro-custom.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [NgClass, RouterLink, TranslateModule ,NgZorroCustomModule, NgIf, NgFor],
})
export class NavbarComponent implements OnInit{
  public isMenuOpen = false;
  public isNotificationOpen = false;
  public userInfo: any;
  profilePhoto: any;
  notifications: any[] = [];
  notificationList: any;
  not_marked_count: any;
  total_count: any;


  constructor(public translateService: TranslateService){}


  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public checkNotification(): void {
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  handleNotificationClick(notification: any) {
    // this.notificationService.markNotificationAsRead({ oid: notification.oid }).subscribe({
    //   next: (res: any) => {
    //     if (res.code === 200) {
    //       const clickedNotification = this.notificationList.messages.find((n: any) => n.oid === notification.oid);
    //       clickedNotification.is_marked = 'Yes';
    //       this.not_marked_count = this.not_marked_count - 1;
    //       this.notificationList.not_marked_count = this.notificationList.not_marked_count - 1;
    //       this.authService._notifications.set(this.notificationList);
    //       this.getNotificationList();
    //       console.log(this.notificationList);
    //     } else {
    //       this.nzNotificationService.error('Error!', res?.message);
    //     }
    //   },
    //   error: (err: any) => {
    //     this.nzNotificationService.error('Error!', err?.message);
    //   },
    // });
  }

  handleSeeAllNotifications() {
    // this.router.navigate(['/ards/notifications']);
  }
}
