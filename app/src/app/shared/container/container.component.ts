import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @Input() starship: Starship;
  
  @Input() total: number = 0;

  @Output() toggleModal = new EventEmitter<Starship>()
  
  constructor() {
    this.starship = new Starship( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', []);
  }


  onToggleModal(): void {
    this.toggleModal.emit(this.starship);
  }

  get splitedName(): string[] {
    return this.starship.name.split(' ').slice(0, 2)
  }



}
