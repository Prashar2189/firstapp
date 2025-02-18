import { Component, AfterViewInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-aboutdata',
  templateUrl: './aboutdata.component.html',
  styleUrls: ['./aboutdata.component.css']
})
export class AboutdataComponent implements AfterViewInit {

  constructor(private mainService: MainService) {}

  ngAfterViewInit() {
    // ✅ Reinitialize scripts when this component loads
    this.mainService.initializeAllScripts();
  }
}
