import { TestBed } from '@angular/core/testing';

import { ModalNovoService } from './modal-novo.service';

describe('ModalNovoService', () => {
  let service: ModalNovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalNovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
