import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    // {
    //   group: '',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/lock-closed.svg',
    //       label: 'Auth',
    //       route: '/auth',
    //       children: [
    //         { label: 'Sign up', route: '/auth/sign-up' },
    //         { label: 'Sign in', route: '/auth/sign-in' },
    //         { label: 'Forgot Password', route: '/auth/forgot-password' },
    //         { label: 'New Password', route: '/auth/new-password' },
    //         { label: 'Two Steps', route: '/auth/two-steps' },
    //       ],
    //     },
    //   ],
    // },
    /*{
      group: 'user',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/application.svg',
          label: 'Application',
          route: '/ards/applications',
        },
        {
          icon: 'assets/icons/heroicons/outline/ruling.svg',
          label: 'Ruling',
          route: '/ards/rulings',
        },
        {
          icon: 'assets/icons/heroicons/outline/guideline.svg',
          label: 'Guidelines',
          route: '/ards/guidelines',
        },
      ],
    },*/
    /* {
      group: 'receiver',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/dashboard.svg',
          label: 'Dashboard',
          route: '/ards/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/application.svg',
          label: 'New Applications',
          route: '/ards/rec-new-applications',
        },
        {
          icon: 'assets/icons/heroicons/outline/received-application.svg',
          label: 'Received Applications',
          route: '/ards/rec-received-applications',
        },
        {
          icon: 'assets/icons/heroicons/outline/approved-application.svg',
          label: 'Approved Applications',
          route: '/ards/rec-approved-applications',
        },
      ],
    }, */
    {
      group: 'approver',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/dashboard.svg',
          label: 'Dashboard',
          route: '/ards/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/application.svg',
          label: 'New Applications',
          route: '/ards/app-new-applications',
        },
        {
          icon: 'assets/icons/heroicons/outline/application.svg',
          label: 'Approved Applications',
          route: '/ards/app-approved-applications',
        },
        {
          icon: 'assets/icons/heroicons/outline/received-application.svg',
          label: 'All Applications',
          route: '/ards/app-all-applications',
        },
      ],
    }, 
  ];

  public static publicPages: MenuItem[] = [
    {
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: 'header.menu.home',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/database.svg',
          label: 'header.menu.ruling-database',
          route: '/ruling-database',
        },
        {
          icon: 'assets/icons/heroicons/outline/information-circle.svg',
          label: 'header.menu.instructions',
          route: '/instructions',
        },
        {
          icon: 'assets/icons/heroicons/outline/signin.svg',
          label: 'header.button.sign-in',
          route: '/auth/sign-in',
        },
        {
          icon: 'assets/icons/heroicons/outline/user-plus.svg',
          label: 'header.button.sign-up',
          route: '/auth/sign-up',
        },
      ],
    }
  ]
}
