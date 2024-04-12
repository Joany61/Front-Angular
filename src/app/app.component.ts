import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpConnectionService } from './services/http-connection.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpConnectionService],
  schemas: []   // here are what is needed to be accessed explecitly
})
export class AppComponent {
  title = 'SNMpy';
}
