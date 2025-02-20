import { Component, AfterViewInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-aboutdata',
  imports: [RouterLink],
  templateUrl: './aboutdata.component.html',
  styleUrls: ['./aboutdata.component.css']
})
export class AboutdataComponent implements AfterViewInit {

  constructor(private mainService: MainService) {}

  ngAfterViewInit() {
    // ✅ Reinitialize scripts when this component loads
    this.mainService.initializeAllScripts();

    window.scrollTo(0, 0);
  }
}
