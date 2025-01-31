import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerdataComponent } from './careerdata.component';

describe('CareerdataComponent', () => {
  let component: CareerdataComponent;
  let fixture: ComponentFixture<CareerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
