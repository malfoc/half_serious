import { Component, HostListener, OnInit } from '@angular/core';

import { Modal } from 'src/app/interfaces/modal.interface';

import { Pilot } from 'src/app/models/pilot.model';
import { Starship } from 'src/app/models/starship.model';

import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})

export class MainComponent implements OnInit {

  private starships$ = this.starshipService.starships$;

  private readonly defaultStarshipId : number = 5;

  private currentStarshipIndex: number = 0;
  
  private scrolling: boolean = false;

  starships: Starship[] = []
  
  starship: Starship;
  
  totalStarships: number = 0

  showSidebar: boolean = false;

  showModal: boolean = false;

  infoModal: Modal = { imageUrl: '', name: '', details: [], showImageInModal: false };

  constructor(
      private starshipService: StarshipService,
    ) {
    
    const pilots: Pilot[] = []

    this.starship = new Starship( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', pilots);

  }

  ngOnInit() {
    
    this.starships$.subscribe( starships => {
      if ( starships.length > 0 ){
        
        this.starships = starships
        this.totalStarships = this.starships.length

        console.log(starships)

        const starship = this.starships.find(starship => starship.id == this.defaultStarshipId)
        if ( starship ) {
          this.starship = starship
          this.currentStarshipIndex = this.defaultStarshipId - 1
        } else {
          this.starship = this.starships[ 0 ]
        }
      }
    })

  }

  toggleSidebar() : void {
    this.showSidebar = !this.showSidebar
  }
  
  toggleModal($event: any) : void {
    this.infoModal = $event
    this.showModal = !this.showModal
  }

  goToStarship($event: number) : void {
    this.starship = this.starships[$event]
    this.currentStarshipIndex = $event
    this.showModal = false
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll($event: WheelEvent): void {
    if ( this.totalStarships > 0 && !this.showSidebar && !this.showModal ) {
      if (!this.scrolling) {
        this.scrolling = true

        if ( $event.deltaY > 0 ) {
          this.currentStarshipIndex = Math.min(this.totalStarships - 1, this.currentStarshipIndex + 1)
        } else {
          this.currentStarshipIndex = Math.max(0, this.currentStarshipIndex - 1)
        }
  
        this.starship = this.starships[this.currentStarshipIndex]

        setTimeout(() => this.scrolling = false, 500);
      }
      
    }
  }

}
