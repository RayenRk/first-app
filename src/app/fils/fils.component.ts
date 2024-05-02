import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
  msg = 'message from child to parent';
  valeur = 0;

  @Input() external : string = '';

  @Output() valueChange = new EventEmitter();
  increament() {
    this.valeur++;
    this.valueChange.emit(this.valeur);
  }
  reset() {
    this.valeur = 0;
    this.valueChange.emit(this.valeur);
  }

}
