import { TestBed } from '@angular/core/testing';
import { HikeServiceMock } from './hike.service.mock';

describe('HikeServiceMock', () => {
  let service: HikeServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new HikeServiceMock();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return first item', (done: DoneFn) => {
    // Arrange
    const id = "1234";

    // Act
    service.getHike(id).subscribe(hike => {
      // Assert
      expect(hike.id).toBe(id);
      done();
    });
  });
});
