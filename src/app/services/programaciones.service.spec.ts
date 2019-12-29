import { TestBed } from '@angular/core/testing';

import { ProgramacionesService } from './programaciones.service';

describe('ProgramacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramacionesService = TestBed.get(ProgramacionesService);
    expect(service).toBeTruthy();
  });
});
