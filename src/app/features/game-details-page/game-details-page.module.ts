import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsPageComponent } from './game-details-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [GameDetailsPageComponent],
  exports: [
    GameDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ]
})
export class GameDetailsPageModule {
}
