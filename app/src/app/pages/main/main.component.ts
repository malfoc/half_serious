import { Component, OnInit } from '@angular/core';
import { SwapiService } from "src/app/services/swapi.service";
import { Pilot } from 'src/app/models/pilot.model';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})

export class MainComponent implements OnInit {

  starships: Starship[] = []
  
  starship: Starship;
  
  totalStarships: number = 0

  private readonly defaultIndexStarship: number = 3;

  constructor(private swapi: SwapiService) {
    
    const pilots: Pilot[] = []

    this.starship = new Starship( 0, '', '', '', '', '', '', '', '', '', '', '', '', '', pilots);

  }

  ngOnInit() {
    this.swapi.get().then(starships => {
      this.starships = starships

      console.log(this.starships);

      this.starship = this.starships[ this.defaultIndexStarship ]
      this.totalStarships = this.starships.length
    })
  }

}
