import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

class Cached {
  public data: any;
  public observable: any;
}

export enum CountriesServiceState {
  Error = 1
}

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) { }

  countries: Cached = { data: null, observable: null };
  country: any = {};
  indicators: any = {};

  fetchCached(url, cahcedData: Cached) {
    if (cahcedData.data) {
      return Observable.of(cahcedData.data);
    } else if (cahcedData.observable) {
      return cahcedData.observable;
    } else {
      cahcedData.observable = this.http.get(url)
        .catch(e =>  Observable.of(CountriesServiceState.Error))
        .do(data => { cahcedData.data = data; cahcedData.observable = null; })
        .share();
      return cahcedData.observable;
    }
  }

  getCountries() {
    return this.fetchCached('https://api.worldbank.org/v2/countries/all?per_page=500&format=json', this.countries);
  }

  getCountry(code: string) {
    if (!(code in this.country)) {
      this.country[code] = new Cached();
    }
    return this.fetchCached('https://api.worldbank.org/v2/countries/' + code + '?format=json', this.country[code]);
  }

  getIndicator(code: string, indicator: string) {
    if (!(code in this.indicators)) {
      this.indicators[code] = {};
    }
    if (!(indicator in this.indicators[code])) {
      this.indicators[code][indicator] = new Cached();
    }

    return this.fetchCached('https://api.worldbank.org/v2/countries/' + code + '/indicators/' + indicator + '?MRV=1&format=json', this.indicators[code][indicator]);
  }
}