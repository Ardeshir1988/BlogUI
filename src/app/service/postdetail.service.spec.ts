import { TestBed } from '@angular/core/testing';

import { PostdetailService } from './postdetail.service';

describe('PostdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostdetailService = TestBed.get(PostdetailService);
    expect(service).toBeTruthy();
  });
});
