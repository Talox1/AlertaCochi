import { TestBed } from '@angular/core/testing';

import { InvitadoService } from './invitado.service';

describe('InvitadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitadoService = TestBed.get(InvitadoService);
    expect(service).toBeTruthy();
  });
});
