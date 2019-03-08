import { async, TestBed } from '@angular/core/testing';
import { ScraperService } from './scraper.service';
import { of, Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

describe('ScraperService', () => {
  let scraperService;
  let getContent;

  const expectedContent = ["<p>hello world</p>"];

  beforeEach(async(() => {
    scraperService = jasmine.createSpyObj('ScraperService', ['getContent']);
    getContent = scraperService.getContent.and.returnValue(of(expectedContent));

    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, HttpHeaders, Observable, of, catchError, tap],
      providers: []
    });
    //.compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(scraperService).toBeTruthy();
  });

  it('getContent should return array of content', () => {
    // Act
    scraperService.getContent("1234").subscribe(function(actualContent){
      
      // Assert
      expect(actualContent).toBeTruthy();
      expect(actualContent).toBe(expectedContent);
    });
  });
});
