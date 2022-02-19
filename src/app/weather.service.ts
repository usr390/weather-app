import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private jsonresponse: string = 'test';
  private state: string = '';
  private city: string = '';
  private coord1: number = 0;
  private coord2: number = 0;

  constructor(private http: HttpClient) { }

  getWeather(searchQuery: string): Observable<Weather> {

    let queryCopy: string = searchQuery;
    this.getCoordinatesFromSearchQuery(queryCopy.replace(' ', '').toLowerCase().split(','));

    // we use the constructor of the HttpParams object and call its set method for each query parameter we want to add to the URL
    const options = new HttpParams().set('units', 'metric').set('q', 'Mercedes').set('appId', environment.apiKey);

    // we use the get method of the HttpClient service. it accepts two parameters: the url endpoint to our api, and an options
    // object which provides additional configuration to the request
    return this.http.get<Weather>(environment.apiUrl + 'weather', {params: options})

  }

  getCoordinatesFromSearchQuery(searchQuery: string[]) {
    console.log('um');
    const options = new HttpParams().set('q', searchQuery[0] + ',' + searchQuery[1] + ',').set('appid', environment.apiKey);
    this.http.get(environment.directGeoCodingApiUrl + 'direct', {params: options}).subscribe(res => {console.log(res)});
  }

}

