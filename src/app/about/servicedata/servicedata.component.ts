import { Component, AfterViewInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicedata',
  imports: [RouterLink],
  templateUrl: './servicedata.component.html',
  styleUrl: './servicedata.component.css'
})
export class ServicedataComponent implements AfterViewInit {

  constructor(private mainService: MainService) { }

  ngAfterViewInit() {
    // ✅ Reinitialize scripts when this component loads
    this.mainService.initializeAllScripts();
    window.scrollTo(0, 0);
  }
}

