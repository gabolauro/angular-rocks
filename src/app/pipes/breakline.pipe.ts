import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakline'
})
export class BreaklinePipe implements PipeTransform {

  transform(text: string): string {

  	let parrafos = text.split('</br>');
  	let textoTodo

  	for (var i = 0; i < parrafos.length; i++) {
  		textoTodo+=parrafos[i]+"\n\r"
  	}
[i]
    return textoTodo;

  }

}
