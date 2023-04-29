import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class DatabindingComponent {
  name: string;
  company: string;
  url: string;
constructor() {
    this.name = 'Mohan';
    this.company = 'Dotnettricks';
    this.url = 'https://www.dotnettricks.com';
  }
  Greet(){
    alert(`Welcome ${this.name}`);
  }
}
