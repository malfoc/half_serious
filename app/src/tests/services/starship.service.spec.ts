import {TestBed} from '@angular/core/testing';

import { Pilots } from '../factories/pilots.mock'
import { Starships } from '../factories/starships.mock'

import { StarshipService } from "src/app/services/starship.service"
import { Pilot } from "src/app/models/pilot.model";
import { Starship } from "src/app/models/starship.model";

describe('StarshipService', () => {

    let service: StarshipService;

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(StarshipService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should set and get the list of starships', () => {
        const starship: any = Starships[0]
        
        const pilot: Pilot = new Pilot(
            Pilots[0].id,
            Pilots[0].name,
            Pilots[0].height,
            Pilots[0].mass,
            Pilots[0].hair_color,
            Pilots[0].skin_color,
            Pilots[0].eye_color,
            Pilots[0].birth_year,
            Pilots[0].gender,
            Pilots[0].homeworld
        )

        const starships: Starship[] = [
            new Starship(
                starship.id,
                starship.name,
                starship.model,
                starship.manufacturer,
                starship.cost_in_credits,
                starship.length,
                starship.max_atmosphering_speed,
                starship.crew,
                starship.passengers,
                starship.cargo_capacity,
                starship.consumables,
                starship.hyperdrive_rating,
                starship.mglt,
                starship.starship_class,
                [ pilot ]
            )
        ]

        service.set(starships);
        service.starships$.subscribe((starshipsList: Starship[]) => {
            expect(starshipsList).toEqual(starships);
        })
    });

})