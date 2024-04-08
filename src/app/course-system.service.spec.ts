import { TestBed } from '@angular/core/testing';

import { CourseSystemService } from './course-system.service';

describe('CourseSystemService', () => {
  let service: CourseSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
