import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: [`
  .red-color{
    color:red
  }`
  ]
})
export class DirComponent {
  num:number;
  colors:any[];
  color:string;
  alphabet:string;
  constructor(){
    this.num= 2;
    this.color='';
    this.colors= ['red','blue','green'];
    this.alphabet='a';
  }

}
