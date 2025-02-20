import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technodata',
  imports: [RouterLink],
  templateUrl: './technodata.component.html',
  styleUrl: './technodata.component.css'
})
export class TechnodataComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
