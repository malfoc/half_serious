import { SwapiService } from "src/app/services/swapi.service"
import { HttpClient } from "@angular/common/http";
import { from, throwError } from "rxjs";

import { Planets } from '../factories/planets.mock'
import { Pilots } from '../factories/pilots.mock'
import { Starships } from '../factories/starships.mock'
import { Starship } from "src/app/models/starship.model";
import { Pilot } from "src/app/models/pilot.model";

describe('SwapiService', () => {

    let swapiService: SwapiService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        swapiService = new SwapiService(httpClientSpy);
    })

    it('#_planets: should bring the list of planets', async () => {
        
        httpClientSpy.get.and.returnValue(
                from(Promise.resolve({ count: Planets.length, results: Planets }))
            )
        
        // Act
        const result = await swapiService._planets()

        // Assertions
        expect( result.length ).toBe( 1 )
        expect( httpClientSpy.get ).toHaveBeenCalledWith( `${swapiService['baseUrl']}/planets/` )
    })

    it('#_planets: should handle error', async () => {
        const errorMessage = 'Error getting planets';
        httpClientSpy.get.and.returnValue(throwError(() => new Error(errorMessage)));
  
        try {
            // Act
            await swapiService._planets();
            fail('Expected an error to be thrown');
        } catch (error: any) {
            // Assertions
            expect( error.message ).toBe(`Error while fetching planets data: ${errorMessage}`);
        }
    })

    it('#_pilots: should bring the list of pilots', async () => {
        
        httpClientSpy.get.and.returnValue(
                from(Promise.resolve({ count: Pilots.length, results: Pilots }))
            )
        swapiService['planets'] = Planets;
        
        // Act
        const result = await swapiService._pilots()

        // Assertions
        expect( result.length ).toBe( 1 )
        expect( httpClientSpy.get ).toHaveBeenCalledWith( `${swapiService['baseUrl']}/people/` )
    })

    it('#_pilots: should handle error', async () => {
        const errorMessage = 'Error getting pilots';
        httpClientSpy.get.and.returnValue(throwError(() => new Error(errorMessage)));
  
        try {
            swapiService['planets'] = Planets;

            // Act
            await swapiService._pilots();
            fail('Expected an error to be thrown');
        } catch (error: any) {
            // Assertions
            expect( error.message ).toBe(`Error while fetching people data: ${errorMessage}`);
        }
    })

    it('#_starships: should bring the list of starships', async () => {
        
        httpClientSpy.get.and.returnValue(
                from(Promise.resolve({ count: Starships.length, results: Starships }))
            )
        swapiService['pilots'] = Pilots;
        
        // Act
        const result = await swapiService._starships()

        // Assertions
        expect( result.length ).toBe( 1 )
        expect( httpClientSpy.get ).toHaveBeenCalledWith( `${swapiService['baseUrl']}/starships/` )
        expect( result[0] instanceof Starship ).toBeTruthy()
        expect( result[0].pilots.length ).toBe( 1 )
        expect( result[0].pilots[0] instanceof Pilot ).toBeTruthy()
    })

    it('#_starships: should handle error', async () => {
        const errorMessage = 'Error getting starships';
        httpClientSpy.get.and.returnValue(throwError(() => new Error(errorMessage)));
  
        try {
            swapiService['pilots'] = Pilots;

            // Act
            await swapiService._starships()
            fail('Expected an error to be thrown');
        } catch (error: any) {
            // Assertions
            expect( error.message ).toBe(`Error while fetching starships data: ${errorMessage}`);
        }
    })

})
