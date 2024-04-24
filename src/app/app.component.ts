import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TwoWayComponent } from './two-way/two-way.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TwoWayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Team!';
  countNum = 1;

  count() {
    this.countNum++;
  }

  reset() {
    this.countNum = 0;
  }
}