import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscherStatisticsComponent } from './escher-statistics.component';

describe('EscherStatisticsComponent', () => {
  let component: EscherStatisticsComponent;
  let fixture: ComponentFixture<EscherStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscherStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscherStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
