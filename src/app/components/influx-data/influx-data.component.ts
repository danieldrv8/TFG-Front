import { Component, OnInit } from '@angular/core';
import { InfluxdbService } from '../../services/influxdb.service';

@Component({
  selector: 'app-influx-data',
  templateUrl: './influx-data.component.html',
  styleUrls: ['./influx-data.component.css'],
})
export class InfluxDataComponent implements OnInit {
  temperatureData: any[] = [];

  constructor(private influxdbService: InfluxdbService) { }

  ngOnInit(): void {
    this.influxdbService.getTemperatureData().subscribe(data => {
      this.temperatureData = data;
    });
  }
}
