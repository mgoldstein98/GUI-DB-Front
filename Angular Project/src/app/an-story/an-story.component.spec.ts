import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnStoryComponent } from './an-story.component';

describe('AnStoryComponent', () => {
  let component: AnStoryComponent;
  let fixture: ComponentFixture<AnStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
