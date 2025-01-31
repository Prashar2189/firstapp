import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredataComponent } from './hiredata.component';

describe('HiredataComponent', () => {
  let component: HiredataComponent;
  let fixture: ComponentFixture<HiredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiredataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
