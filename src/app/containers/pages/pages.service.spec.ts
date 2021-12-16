import { TestBed, inject } from '@angular/core/testing';

import { PagesService } from './pages.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagesService]
    });
  });

  it('should be created', inject([PagesService], (service: PagesService) => {
    expect(service).toBeTruthy();
  }));
});
