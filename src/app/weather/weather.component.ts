import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;
  image = new Map();

  constructor(private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.image.set("Clear", "../../assets/clear.png");
    this.image.set("Clouds", "../../assets/cloudy.png");
    this.image.set("Rain", "../../assets/rain.png");
    this.image.set("Snow", "../../assets/snow.png");
  }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }

  generateImage(condition: string) {
    return this.image.get(condition);
  }

}
