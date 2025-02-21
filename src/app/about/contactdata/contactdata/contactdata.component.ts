import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactdata',
  imports: [RouterLink],
  templateUrl: './contactdata.component.html',
  styleUrl: './contactdata.component.css'
})
export class ContactdataComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  emailid2 = "contact@appsimity.com"
}
