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
  weatherIcons = new Map();

  constructor(private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.setWeatherIcons();
  }

  search(searchQuery: string) {
    this.weatherService.getWeather(searchQuery).subscribe(weather => this.weather = weather);
  }

  generateImage(condition: string) {
    return this.weatherIcons.get(condition);
  }

  setWeatherIcons() {
    this.weatherIcons.set("Clear", "../../assets/clear.png");
    this.weatherIcons.set("Clouds", "../../assets/cloudy.png");
    this.weatherIcons.set("Rain", "../../assets/rain.png");
    this.weatherIcons.set("Snow", "../../assets/snow.png");
  }

}
