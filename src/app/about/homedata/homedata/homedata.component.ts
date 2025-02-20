import { Component, AfterViewInit } from '@angular/core';
import { MainService } from '../../../services/main.service';

declare var $: any;

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

    window.scrollTo(0, 0);

    $('.customer-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: { slidesToShow: 4 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 520,
          settings: { slidesToShow: 2 }
        }
      ]
    });
  }
}



