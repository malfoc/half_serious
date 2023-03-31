import { ModalDetails } from "../interfaces/modal.interface";
import { Pilot } from "../models/pilot.model";

export class Starship {

    private readonly assets: number[] = [
        4, 5, 12, 15
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

    get details(): ModalDetails[] {
        return [
            { label: 'Cost in credits:', value: this.cost_in_credits},
            { label: 'Length:', value: this.length},
            { label: 'Max. Atmosphering Speed:', value: this.max_atmosphering_speed},
            { label: 'Crew:', value: this.crew},
            { label: 'Passengers:', value: this.passengers},
            { label: 'Cargo Capacity:', value: this.cargo_capacity},
            { label: 'Consumables:', value: this.consumables},
            { label: 'Hyperdrive Rating:', value: this.hyperdrive_rating},
            { label: 'MGLT:', value: this.mglt},
            
        ]
    }

    get showImageInModal(): boolean {
        return false
    }

}