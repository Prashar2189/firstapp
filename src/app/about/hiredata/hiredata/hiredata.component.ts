import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hiredata',
  imports: [RouterLink],
  templateUrl: './hiredata.component.html',
  styleUrl: './hiredata.component.css'
})
export class HiredataComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}