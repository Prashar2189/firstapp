import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./about/header/header/header.component";
import { FooterComponent } from './about/footer/footer/footer.component';
import { MainService } from './services/main.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  constructor(private mainService: MainService) {}

  ngAfterViewInit() {
    // ✅ Initialize all JS functions
    this.mainService.initializeAllScripts();
  }
  
}