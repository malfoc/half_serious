import { Pilot } from "./pilot.interface";

export interface Starship {
  id: number,
  name: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  hyperdrive_rating: string,
  mglt: string,
  starship_class: string,
  pilots: Pilot[] | string[]
}