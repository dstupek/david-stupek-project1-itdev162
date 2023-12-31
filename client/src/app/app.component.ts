import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  weatherForecasts: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
      //throw new Error('Method not implimented.')
      this.http.get('http://localhost:5198/weatherforecast').subscribe(
        response => { this.weatherForecasts = response; },
        error => { console.log(error)}
      );
  }
}
