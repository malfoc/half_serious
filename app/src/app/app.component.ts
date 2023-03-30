import { Component, OnInit } from '@angular/core';
import { Starship } from './models/starship.model';
import { SwapiService } from './services/swapi.service';
import { StarshipService } from './services/starship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  ]
})
export class AppComponent implements OnInit {

  starships: Starship[] = []

  constructor(
    private swapi: SwapiService,
    private starship: StarshipService,
  ) {}

  async ngOnInit() {
    const starships = await this.swapi.builder()
    this.starship.set(starships)
  }

}
