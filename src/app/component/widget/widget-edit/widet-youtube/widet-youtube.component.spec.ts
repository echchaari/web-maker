import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidetYoutubeComponent } from './widet-youtube.component';

describe('WidetYoutubeComponent', () => {
  let component: WidetYoutubeComponent;
  let fixture: ComponentFixture<WidetYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidetYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidetYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
