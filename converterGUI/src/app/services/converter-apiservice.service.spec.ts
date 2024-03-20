import { TestBed } from '@angular/core/testing';

import { ConverterAPIServiceService } from './converter-apiservice.service';

describe('ConverterAPIServiceService', () => {
  let service: ConverterAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
