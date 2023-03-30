import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private starships = new BehaviorSubject<Starship[]>([]);
  
  public starships$ = this.starships.asObservable();

  set(starships: Starship[]): void{
    this.starships.next(starships)
  }
}
