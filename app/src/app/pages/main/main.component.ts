import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starship.interface';
import { SwapiService } from "../../services/swapi.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})

export class MainComponent implements OnInit {

  starships: Starship[] = []

  constructor(private swapi: SwapiService) {}

  ngOnInit() {
    this.swapi.get().then(starships => {
      console.log(starships);
    })
  }

}
