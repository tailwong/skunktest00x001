import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimEventComponent } from './swim-event.component';

describe('SwimEventComponent', () => {
  let component: SwimEventComponent;
  let fixture: ComponentFixture<SwimEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
