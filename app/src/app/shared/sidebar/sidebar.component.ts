import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent {

  @Input() starships: Starship[] = []

  @Input() selected: number = 0

  @Input() show: boolean = false

  @Output() toggleSidebar = new EventEmitter<void>()

  @Output() goToStarship = new EventEmitter<number>()

  onToggleSidebar() : void {
    this.show = !this.show;
    this.toggleSidebar.emit();
  }

  goTo(id: number) : void {
    this.onToggleSidebar()
    this.goToStarship.emit(id)
  }

}
