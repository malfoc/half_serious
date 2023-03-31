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

}