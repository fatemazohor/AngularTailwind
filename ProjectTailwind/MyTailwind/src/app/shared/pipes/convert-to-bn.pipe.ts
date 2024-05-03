import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'convertToBn',
  standalone: true,
})
export class ConvertToBnPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: any) {
    if (!value || this.translateService.currentLang !== 'bn') {
      return value;
    }
    return this.convertToBnEn(String(value));
  }

  convertToBnEn(str: string) {
    if (!str) {
      return '';
    }
    let newStr = '';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case '0':
          newStr += '০';
          break;
        case '1':
          newStr += '১';
          break;
        case '2':
          newStr += '২';
          break;
        case '3':
          newStr += '৩';
          break;
        case '4':
          newStr += '৪';
          break;
        case '5':
          newStr += '৫';
          break;
        case '6':
          newStr += '৬';
          break;
        case '7':
          newStr += '৭';
          break;
        case '8':
          newStr += '৮';
          break;
        case '9':
          newStr += '৯';
          break;
        default:
          newStr += str[i];
          break;
      }
    }
    return newStr.toString();
  }
}
