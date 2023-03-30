import { Component, Input } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @Input() starship: Starship;
  
  @Input() total: number = 0;

  constructor() {
    this.starship = new Starship( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', []);
  }

  get splitedName(): string[] {
    return this.starship.name.split(' ')
  }

}
