import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(uswers: any[], word: string): any[] {
    return uswers.filter((p) => {
      return p.name.toLowerCase().includes(word.toLowerCase());
    })
  }

}
