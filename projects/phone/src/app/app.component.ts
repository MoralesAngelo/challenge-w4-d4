import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { InfoComponent } from './components/info/info.component';
import { ActionComponent } from './components/actions/action/action.component';
import { DisplayComponent } from './components/display/display.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    KeyboardComponent,
    InfoComponent,
    ActionComponent,
    DisplayComponent,
  ],
})
export class AppComponent {
  title = 'phone';
}
