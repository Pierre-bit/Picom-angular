import { TestBed } from '@angular/core/testing';
import { ArretService } from '../services/arret.service';



describe('ArretService', () => {
  let service: ArretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
