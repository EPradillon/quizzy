import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';

describe('CitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
});
