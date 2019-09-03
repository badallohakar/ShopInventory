import { TestBed } from '@angular/core/testing';

import { GlobaldataproviderService } from './globaldataprovider.service';

describe('GlobaldataproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobaldataproviderService = TestBed.get(GlobaldataproviderService);
    expect(service).toBeTruthy();
  });
});
