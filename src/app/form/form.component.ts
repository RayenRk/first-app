import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nom : string = 'Aymen';
  age:number = 35;
  adresse : string ='Chez moi...';
  color: string="white";

  getName(){
    return this.nom;
  }
  modifier(newName:string){
    this.nom=newName;
  }

  modifierColor(newColor:string){
    this.color=newColor;
  }
}
