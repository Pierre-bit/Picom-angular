import { TestBed } from '@angular/core/testing';

import { MatPaginatorI18nServiceService } from '../services/mat-paginator-i18n-service.service';

describe('MatPaginatorI18nServiceService', () => {
  let service: MatPaginatorI18nServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorI18nServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
