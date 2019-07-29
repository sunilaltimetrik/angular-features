import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summery'
})
export class SummeryPipe implements PipeTransform{
     transform(value: string, limit?:number){
         if(!value){
             return null;
         }else{
             let textLenght = limit ? limit : 50;
             return value.substr(0,textLenght) + '...';
         }
     }
}