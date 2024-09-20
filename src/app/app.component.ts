import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent } from './component/main/main.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  Texto = "Bienvenidos a mi página";
    saludar(){
      this.Texto = "YO SOY EL TERRARIANO"
    }

    
}
