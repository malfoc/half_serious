import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../pages/main/main.component';

/**
 * Default starship: Millennium Falcon
 */
const defaultIdStarship: string = '5';

const routes: Routes = [
  { path: ':id', component: MainComponent },
  { path: '', redirectTo: defaultIdStarship, pathMatch: 'full' },
  { path: '**', redirectTo: defaultIdStarship }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
