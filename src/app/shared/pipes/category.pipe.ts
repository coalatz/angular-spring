import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Front-End':return 'code'
      case 'Back-End':return 'computer'
      case 'Dev Jogos': return 'gamepad'
      case 'IA' : return 'robot'
    }
    return 'code';
  }

}
