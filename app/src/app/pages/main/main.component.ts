import { Component, Input, OnInit } from '@angular/core';

import { Pilot } from 'src/app/models/pilot.model';
import { Starship } from 'src/app/models/starship.model';
import { ActivatedRoute, Router } from '@angular/router';

import { StarshipService } from 'src/app/services/starship.service';
import { forkJoin, lastValueFrom, map, Observable, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})

export class MainComponent implements OnInit {

  private starships$ = this.starshipService.starships$;

  private readonly defaultStarshipId : string = '1';

  starships: Starship[] = []
  
  starship: Starship;
  
  totalStarships: number = 0

  constructor(
      private starshipService: StarshipService,
      private route: ActivatedRoute,
      private router: Router,
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

        this.route.params.subscribe( params => {
          
          const starship = this.starships.find(starship => starship.id == params['id'])
          if ( starship ) {
            this.starship = starship
          } else {
            this.router.navigate( [ this.defaultStarshipId ] )
          }

        })
      }
    })
    
  }

}
