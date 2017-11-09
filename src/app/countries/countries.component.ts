import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountriesService, CountriesServiceState } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountriesComponent implements OnInit {
  countries: any = null;
  selectedCountry: any = null;

  constructor(private countriesService: CountriesService) { }

  fetchCountries() {
    this.countriesService.getCountries().subscribe(data => {
      if (data === CountriesServiceState.Error || data[0] && data[0]['message']) {
        this.countries = 'error';
      } else if (data && data[1]) {
        this.countries = data[1]
      } else {
        this.countries = null;
      }
    });
  }

  ngOnInit() {
    this.fetchCountries();
  }

  onSelect(country) {
    this.selectedCountry = country;
  }
}