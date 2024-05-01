import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  sync:any="";
  name: any="John Doe";
  job: any="Developer";
  img: any = "rotating_card_profile2.png";
  bio: any="Orgesou bel we7ed";
  do: any="Dev";
  key: any="Dev, Music, Football";
  fav: any="To be or not to be!";
  
}
