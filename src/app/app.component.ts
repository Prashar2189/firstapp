import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./about/header/header/header.component";
import { FooterComponent } from './about/footer/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { MainService } from './services/main.service';
import { FormsModule } from '@angular/forms';









@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  title: any;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data || { title: 'Default Title' };
      })
    ).subscribe(data => {
      this.titleService.setTitle(data['title']);
    });
  }

  // ✅ Initialize all JS functions after the view is rendered
  ngAfterViewInit() {
    this.mainService.initializeAllScripts();
  }
}