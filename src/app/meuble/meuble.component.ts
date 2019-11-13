import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
@Input()T:string;
f:boolean=true;
p=0;
ch;
affiche(n:number)
{
this.p=n+((n*20)/100);
let k=document.getElementsByName('n')[0];

}
  constructor() { }

  ngOnInit() {
  }

}
