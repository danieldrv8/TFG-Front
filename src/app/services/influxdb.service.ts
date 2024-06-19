import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class InfluxdbService {
  private url = '/api/v2/query';
  private token =
    'M76buWN666c3iTUNAdYlJtP_tH8_KZJp6vdKID1345tfgvJhZvBcTMLP7f8SIOPPa7bSb9WMrw2jxeN_4OykOA==';
  private org = 'My_Org';
  private bucket = 'My_Buck';


  constructor(private http: HttpClient) { }


  getTemperatureData(): Observable<any> {
    const fluxQuery = `
      from(bucket: "${this.bucket}")
        |> range(start: 0)
        |> filter(fn: (r) => r._measurement == "test_measurement")
        |> filter(fn: (r) => r._field == "temperature")
    `;

    const headers = new HttpHeaders({
      'Authorization': `Token ${this.token}`,
      'Content-Type': 'application/vnd.flux'
    });

    return this.http.post(this.url, { query: fluxQuery, org: this.org }, { headers })
      .pipe(map((response: any) => response));
  }

}
