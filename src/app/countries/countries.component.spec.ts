import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CountriesService, CountriesServiceState } from '../countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService],
      declarations: [ CountriesComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
