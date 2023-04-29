import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent {
  employees:any[];
  constructor(){
    this.employees=[
      {name:'Mohan',address:'Noida',salary:10000, joining:new Date()},
      {name:'Ankit',address:'Mumbai',salary:20000, joining:new Date()},
     {name:'Amar',address:'Kolkata',salary:30000, joining:new Date()}
    ] 
    }

}
