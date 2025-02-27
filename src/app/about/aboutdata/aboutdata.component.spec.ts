import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdataComponent } from './aboutdata.component';

describe('AboutdataComponent', () => {
  let component: AboutdataComponent;
  let fixture: ComponentFixture<AboutdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
