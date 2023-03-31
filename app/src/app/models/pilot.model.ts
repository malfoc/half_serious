import { ModalDetails } from "../interfaces/modal.interface"

export class Pilot {
    
    private fullname: string[] = []

    private readonly assets: number[] = [
        1, 4, 10, 11, 13, 14, 21, 24, 30, 34, 43
    ]

    constructor(
        public id: number,
        public name: string,
        public height: string,
        public mass: string,
        public hair_color: string,
        public skin_color: string,
        public eye_color: string,
        public birth_year: string,
        public gender: string,
        public homeworld: string | null | undefined
    ) {
        
        this.fullname = name.split(' ')

    }

    get firstname() : string {
        return this.fullname[0]
    }

    get lastname() : string {
        const fullname = [...this.fullname]
        fullname.shift()
        return fullname.join(' ')
    }

    get imageUrl() : string {
        return this.assets.includes(this.id) 
            ? `./assets/characters/${ this.id }.png`
            : './assets/characters/not_found.svg'
    }

    get details(): ModalDetails[] {
        return [
            { label: 'Height:', value: `${this.height} cm` },
            { label: 'Mass:', value: `${this.mass} kg` },
            { label: 'Hair Color:', value: this.capitilize(this.hair_color) },
            { label: 'Skin Color:', value: this.capitilize(this.skin_color) },
            { label: 'Eye Color:', value: this.capitilize(this.eye_color) },
            { label: 'Birth Year:', value: this.birth_year },
            { label: 'Gender:', value: this.capitilize(this.gender) },
            { label: 'Homeworld:', value: this.homeworld },
        ]
    }

    get showImageInModal(): boolean {
        return true
    }

    capitilize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

}