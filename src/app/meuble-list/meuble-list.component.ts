import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meuble-list',
  templateUrl: './meuble-list.component.html',
  styleUrls: ['./meuble-list.component.css']
})
export class MeubleListComponent implements OnInit {
meubles=[
  {libelle:'table',img:'../assets/table.jpg',prixTTC:47,neuf:true},
  {libelle:'armoire',img:'../assets/armoire.jpg',prixTTC:258.5,neuf:false},
  {libelle:'fauteuil',img:'../assets/fauteuil.jpg',prixTTC:113.8,neuf:true}
]
d=new Date();
choix;
n:number=2;
c:number=1;
Onajoutn()
{this.n+=1;}
Onajoutc()
{this.c+=1;}
  constructor() { }

  ngOnInit() {
  }

}
