import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [NgClass, RouterOutlet],
})
export class AppComponent {
  title = 'MyTailwind';

  constructor(public themeService: ThemeService, translate: TranslateService) {
    translate.addLangs(['en', 'bn']);
    translate.setDefaultLang('en');
    translate.use('bn');
  }
}
