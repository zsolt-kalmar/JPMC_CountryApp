import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CountriesService, CountriesServiceState } from '../countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ CountriesService ],
      declarations: [ CountryComponent ],
      imports: [ RouterTestingModule , HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
