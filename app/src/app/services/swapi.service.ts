import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planet } from '../interfaces/planet.interface';
import { Pilot } from '../interfaces/pilot.interface';
import { Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})

export class SwapiService {

  private readonly baseUrl: string = 'https://swapi.dev/api'

  private planets: Planet[] = []
  private pilots: Pilot[] = []

  constructor(
    private http: HttpClient,
  ) {}

  async get() {

    this.planets = await this._planets()
    this.pilots = await this._pilots()
    
    return await this._starships()
  }

  async _load(model: string): Promise<any> {

    const records: any[] = []

    const { count, results }: any = await this.http.get(`${ this.baseUrl }/${model}/`).toPromise()
    records.push(results)

    const length = Math.ceil(count / results.length)
    const promises = Array.from(new Array(length), ( _, page) =>
      this.http.get(`${ this.baseUrl }/${model}/?page=${ page + 1 }`).toPromise()
    )
    promises.shift()

    const responses = await Promise.all(promises)
    responses.forEach(({results}: any) => {
      records.push(results)
    })

    return records.flat()
  }

  async _planets(): Promise<Planet[]> {
    const planets: Planet[] = await this._load('planets')
    return planets.map((planet) => ({
      name: planet.name,
      url: planet.url
    }))
  }

  async _pilots(): Promise<Pilot[]> {
    const pilots: Pilot[] = await this._load('people')
    return pilots.map((pilot, key) => {

      let homeworld: Planet[] = [];
      const planet = this.planets.find(planet => planet.url == pilot.homeworld);
      if (planet) {
        homeworld = [planet];
      }

      return {
        id: key + 1,
        name: pilot.name,
        height: pilot.height,
        mass: pilot.mass,
        hair_color: pilot.hair_color,
        skin_color: pilot.skin_color,
        eye_color: pilot.eye_color,
        birth_year: pilot.birth_year,
        gender: pilot.gender,
        homeworld: homeworld ? homeworld[0].name : null,
        url: pilot.url
      }
    })
  }

  async _starships(): Promise<Starship[]> {
    const starships: Starship[] = await this._load('starships')
    return starships.map((starship, key) => {
      
      let pilots: Pilot[] = [];
      starship.pilots.forEach((url) => {
        const pilot = this.pilots.find(pilot => pilot.url === url)
        if ( pilot ) {
          pilots.push(pilot)
        }
      })

      return {
        id: key + 1,
        name: starship.name,
        manufacturer: starship.manufacturer,
        cost_in_credits: starship.cost_in_credits,
        length: starship.length,
        max_atmosphering_speed: starship.max_atmosphering_speed,
        crew: starship.crew,
        passengers: starship.passengers,
        cargo_capacity: starship.cargo_capacity,
        consumables: starship.consumables,
        hyperdrive_rating: starship.hyperdrive_rating,
        mglt: starship.mglt,
        starship_class: starship.starship_class,
        pilots: pilots,
      }
    })
  }
}