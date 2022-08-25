import { TestBed } from '@angular/core/testing';
import { ZonesService } from '../services/zones.service';



describe('ZonesService', () => {
  let service: ZonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
