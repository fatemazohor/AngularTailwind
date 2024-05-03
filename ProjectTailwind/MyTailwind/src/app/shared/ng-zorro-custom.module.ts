import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US,bn_BD, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';


const NG_ZORRO_MODULES = [
  NzGridModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzMessageModule,
  NzTabsModule,
  NzCardModule,
  NzDividerModule,
  NzFormModule,
  NzInputModule,
  NzImageModule,
  NzDropDownModule,
  NzNotificationModule,
  NzSelectModule,
  NzDatePickerModule,
  NzSkeletonModule,
  NzPageHeaderModule,
  NzTableModule,
  NzModalModule,
  NzPaginationModule,
  NzCheckboxModule,
  NzRadioModule,
  NzSwitchModule,
  NzIconModule,
  NzToolTipModule,
  NzTimelineModule,
  NzBadgeModule,
  NzPopoverModule,
  NzEmptyModule,
  NzCalendarModule
];

@NgModule({
  imports: [...NG_ZORRO_MODULES],
  exports: [...NG_ZORRO_MODULES],
  providers: [provideNzI18n(en_US)],
})
export class NgZorroCustomModule {}
