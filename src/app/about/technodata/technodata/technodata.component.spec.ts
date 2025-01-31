import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnodataComponent } from './technodata.component';

describe('TechnodataComponent', () => {
  let component: TechnodataComponent;
  let fixture: ComponentFixture<TechnodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnodataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
