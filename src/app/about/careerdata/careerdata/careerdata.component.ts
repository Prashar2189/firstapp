import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careerdata',
  imports: [RouterLink],
  templateUrl: './careerdata.component.html',
  styleUrl: './careerdata.component.css'
})
export class CareerdataComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  hremailid = "hr@appsimity.com";
}
