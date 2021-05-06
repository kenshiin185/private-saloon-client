import { TestBed } from '@angular/core/testing';

import { MsgpostService } from './msgpost.service';

describe('MsgpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsgpostService = TestBed.get(MsgpostService);
    expect(service).toBeTruthy();
  });
});
