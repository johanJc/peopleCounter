import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'peopleCounter';
  lastTouchEnd = 0;

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const now = new Date().getTime();
    if (now - this.lastTouchEnd <= 300) {
      event.preventDefault(); // Previene el zoom del doble tap
    }
    this.lastTouchEnd = now;
  }
}
