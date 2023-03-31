import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnChanges {

  @Input() starship: Starship;
  
  @Input() total: number = 0;

  @Output() toggleModal = new EventEmitter<Starship>()

  imageLoaded: boolean = false;

  loading: boolean = false;

  previousImageUrl: string = '';

  currentImageUrl: string = '';

  constructor() {
    this.starship = new Starship( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', []);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(
      changes['starship'] &&
      changes['starship'].currentValue &&
      changes['starship'].previousValue &&
      changes['starship'].currentValue.imageUrl &&
      changes['starship'].currentValue.imageUrl != changes['starship'].previousValue.imageUrl
      ){
        this.imageLoaded = false;
        this.loading = true
  
        this.previousImageUrl = changes['starship'].previousValue.imageUrl
        this.currentImageUrl = changes['starship'].currentValue.imageUrl
    }
  }

  get splitedName(): string[] {
    return this.starship.name.split(' ').slice(0, 2)
  }

  onToggleModal(): void {
    this.toggleModal.emit(this.starship);
  }

  onImageLoad(): void {
    this.imageLoaded = true; 
    this.loading = false;
  }

}
