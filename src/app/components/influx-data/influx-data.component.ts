import { Component, OnInit } from '@angular/core';
import { InfluxdbService } from '../../services/influxdb.service';

@Component({
  selector: 'app-influx-data',
  templateUrl: './influx-data.component.html',
  styleUrls: ['./influx-data.component.css']
})
export class InfluxDataComponent implements OnInit {
  public data: any[] = [];

  constructor(private influxdbService: InfluxdbService) {}

  ngOnInit(): void {
    // Define la parte de la consulta que quieres añadir al bucket
    const query = `range(start: -1h) |> filter(fn: (r) => r._measurement == "test_measurement")`;
    this.influxdbService.getData(query).then(
      data => this.data = data,
      error => console.error('Error fetching data from InfluxDB', error)
    );
  }
  getKeys(item: any): string[] {
    return Object.keys(item);
  }
  
}
