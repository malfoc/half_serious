import { Pilot } from "../models/pilot.model";

export class Starship {

    private readonly assets: number[] = [
        4, 5, 15
    ]

    constructor(
        public id: number,
        public name: string,
        public model: string,
        public manufacturer: string,
        public cost_in_credits: string,
        public length: string,
        public max_atmosphering_speed: string,
        public crew: string,
        public passengers: string,
        public cargo_capacity: string,
        public consumables: string,
        public hyperdrive_rating: string,
        public mglt: string,
        public starship_class: string,
        public pilots: Pilot[] | string[]
    ){}

    get index(): string {
        return this.id < 10
            ? `0${this.id}`
            : this.id.toString()
    }

    get imageUrl(): string {
        return this.assets.includes(this.id) 
            ? `./assets/starships/${ this.id }.png`
            : './assets/starships/not_found.svg'
    }

}