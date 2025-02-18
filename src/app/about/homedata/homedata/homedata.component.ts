import { Component, AfterViewInit } from '@angular/core';
import { MainService } from '../../../services/main.service';



@Component({
  selector: 'app-homedata',
  imports: [],
  templateUrl: './homedata.component.html',
  styleUrl: './homedata.component.css'
})
export class HomedataComponent implements AfterViewInit {

  emailad = "contact@appsimity.com"

  constructor(private mainService: MainService) {}

  ngAfterViewInit() {
    // ✅ Reinitialize scripts when this component loads
    this.mainService.initializeAllScripts();
  }
}



