import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CardComponent } from './card/card.component';
import { FilsComponent } from './fils/fils.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TwoWayComponent, CardComponent, FilsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Team!';
  countNum = 1;
  msg = 'message from child to parent';
  result : any=0;

  count() {
    this.countNum++;
  }

  reset() {
    this.countNum = 0;
  }

  showValue(value: any) {
    this.result = value;
  }
}