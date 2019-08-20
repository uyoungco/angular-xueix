import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { transition, state, trigger, style, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square',
      [
        state('green', style({'background': 'green'})),
        state('red', style({'background': 'red'})),
        transition('green => red', animate(1000))
      ])
  ]
})
export class AppComponent {

  squareState: string;
  darkTheme = false
  constructor(private oc: OverlayContainer) {

  }
  switchTheme(dark: boolean) {
    this.darkTheme = dark
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }
}
