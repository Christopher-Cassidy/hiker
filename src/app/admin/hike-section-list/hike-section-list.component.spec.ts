import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HikeSectionListComponent } from './hike-section-list.component';

describe('HikeSectionListComponent', () => {
  let component: HikeSectionListComponent;
  let fixture: ComponentFixture<HikeSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
