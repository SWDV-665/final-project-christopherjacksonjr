import { TestBed } from '@angular/core/testing';

import { IncomeInputDialogService } from './income-input-dialog.service';

describe('IncomeInputDialogService', () => {
  let service: IncomeInputDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeInputDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
