import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal, ModalDetails } from 'src/app/interfaces/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent {

  @Input() show: boolean = false

  @Input() data: Modal = { imageUrl: '', name: '', details: [], showImageInModal: false }

  @Output() toggleModal = new EventEmitter<Modal>()

  get splitedName(): string[] {
    return this.data.name.split(' ').slice(0, 2)
  }

  onToggleModal(): void {
    this.show = false;
    this.toggleModal.emit({ imageUrl: '', name: '', details: [], showImageInModal: false });
  }

}
