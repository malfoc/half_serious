import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pilot } from 'src/app/models/pilot.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:[ './footer.component.scss' ]
})
export class FooterComponent {

  @Input() pilots: any[] = []

  @Input() show: boolean = true;
  
  @Output() toggleModal = new EventEmitter<Pilot>()

  onToggleModal(pilot: Pilot): void {
    this.show = false;
    this.toggleModal.emit(pilot);
  }

}
