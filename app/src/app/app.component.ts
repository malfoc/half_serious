import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { StarshipService } from './services/starship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  ]
})
export class AppComponent implements OnInit {

  isLoading: boolean = true

  constructor(
    private swapi: SwapiService,
    private starship$: StarshipService,
  ) {}

  async ngOnInit() {
    const starships = await this.swapi.builder()
    this.starship$.set( starships )
    this.isLoading = false

    this.backgroundChange()
    
  }

  backgroundChange() : void {
    document.body.style.backgroundColor = '#E3E7EB';
    document.body.style.backgroundImage = 'url("./assets/bg.svg")';
    document.body.style.backgroundPositionX = 'center';
    document.body.style.backgroundPositionY = 'bottom';
    document.body.style.backgroundRepeat = 'no-repeat';
  }

}
