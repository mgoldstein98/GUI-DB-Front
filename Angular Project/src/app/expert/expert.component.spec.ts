import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertComponent } from './expert.component';

describe('ExpertTablesComponent', () => {
  let component: ExpertComponent;
  let fixture: ComponentFixture<ExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
