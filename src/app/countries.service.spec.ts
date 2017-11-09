import { TestBed, inject } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([CountriesService], (service: CountriesService) => {
    expect(service).toBeTruthy();
  }));
});
