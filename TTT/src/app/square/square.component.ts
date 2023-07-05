import { PropertyRead } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
/* num=0;
constructor(){
setInterval(()=>this.num=Math.random(),1500); */
  @Input()
  value!: "X" | "O"; /* Dumb Component information kommt von app.component */

}
