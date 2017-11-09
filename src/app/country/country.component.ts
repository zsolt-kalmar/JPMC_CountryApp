import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountriesService, CountriesServiceState } from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountryComponent implements OnInit {

  country = null;
  indicators = {};

  constructor(private route: ActivatedRoute,
    private countriesService: CountriesService,
    private location: Location) { }

  fetchCountry(code) {
    this.countriesService.getCountry(code).subscribe(data => {
      if (data === CountriesServiceState.Error || data && data[0] && data[0]['message']) {
        this.country = 'error';
      } else if (data && data[1] && data[1][0]) {
        this.country = data[1][0];
      } else {
        this.country = null;
      }
    });
  }

  fetchIndicator(code, indicator) {
    this.countriesService.getIndicator(code, indicator).subscribe(data => {
      if (data === CountriesServiceState.Error || data && data[0] && data[0]['message']) {
        this.indicators[indicator] = null;
      } else if (data && data[1] && data[1][0]) {
        this.indicators[indicator] = data[1][0];
      } else {
        this.indicators[indicator] = null;
      }
    });
  }

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code');

    this.fetchCountry(code);
    this.fetchIndicator(code, 'NY.GDP.MKTP.CD');
  }
}