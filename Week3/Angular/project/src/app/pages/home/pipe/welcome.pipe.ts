// a-pipe
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'welcome',
})
export class WelcomePipe implements PipeTransform {
  transform(value: string, useSuffix?: boolean): any {
    let formatedValue = `Welcome ${value}`;
    if (useSuffix) {
      formatedValue += ' to Cybersoft';
    }
    return formatedValue;
  }
}
