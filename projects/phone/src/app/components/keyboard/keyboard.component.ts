import { Component } from '@angular/core';

@Component({
  selector: 'isdi-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  constructor() {}
  onCall() {
    throw new Error('Method not implemented.');
  }
  onClear() {
    throw new Error('Method not implemented.');
  }
  onKeyPress(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
