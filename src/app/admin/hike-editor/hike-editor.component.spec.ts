import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HikeEditorComponent } from './hike-editor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Hike, HIKES } from 'src/app/models/Hike';
import { HikeServiceMock } from 'src/app/services/hike.service.mock';
import { FormsModule } from '@angular/forms';

describe('HikeEditorComponent', () => {
  let component: HikeEditorComponent;
  let fixture: ComponentFixture<HikeEditorComponent>;
  let hikeService;
  let getHikeSpy;


  beforeEach(async(() => {
    const hike = HIKES[0];
    hikeService = jasmine.createSpyObj('HikeServiceMock', ['getHike']);
    getHikeSpy = hikeService.getHike.and.returnValue(of(hike));

    TestBed.configureTestingModule({
      declarations: [HikeEditorComponent],
      imports: [RouterTestingModule.withRoutes([]),FormsModule],
      providers: [
       { provide: HikeServiceMock, useValue: hikeService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
