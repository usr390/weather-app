import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
