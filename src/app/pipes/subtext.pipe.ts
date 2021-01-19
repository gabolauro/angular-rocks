import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtext'
})
export class SubtextPipe implements PipeTransform {

  transform(text: string): string {

    let parrafos = text.split('</br>');
    return parrafos[0];
  }

}
