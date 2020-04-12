import { TestBed } from '@angular/core/testing';

import { UniversitasService } from './universitas.service';

describe('UniversitasService', () => {
  let service: UniversitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
