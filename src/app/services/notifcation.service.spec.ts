import { TestBed } from '@angular/core/testing';

import { NotifcationService } from './notifcation.service';

describe('NotifcationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifcationService = TestBed.get(NotifcationService);
    expect(service).toBeTruthy();
  });
});
