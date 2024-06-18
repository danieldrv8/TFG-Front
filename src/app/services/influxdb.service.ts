import { Injectable } from '@angular/core';
import { InfluxDB, FluxTableMetaData } from '@influxdata/influxdb-client';

@Injectable({
  providedIn: 'root'
})
export class InfluxdbService {

  private url = 'http://localhost:8086';
  private token = 'M76buWN666c3iTUNAdYlJtP_tH8_KZJp6vdKID1345tfgvJhZvBcTMLP7f8SIOPPa7bSb9WMrw2jxeN_4OykOA==';
  private org = 'My_Org';
  private bucket = 'My_Buck';

  private influxDB: InfluxDB;

  constructor() {
    this.influxDB = new InfluxDB({ url: this.url, token: this.token });
  }

  async getData(query: string): Promise<any[]> {
    const queryApi = this.influxDB.getQueryApi(this.org);
    const data: any[] = [];

    // Incluye el bucket en la consulta
    const fluxQuery = `from(bucket: "${this.bucket}") |> ${query}`;

    return new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row: string[], tableMeta: FluxTableMetaData) {
          const o = tableMeta.toObject(row);
          data.push(o);
        },
        error(error: Error) {
          reject(error);
        },
        complete() {
          resolve(data);
        },
      });
    });
  }
}









// import { Injectable } from '@angular/core';
// import { InfluxDB, FluxTableMetaData } from '@influxdata/influxdb-client';

// @Injectable({
//   providedIn: 'root'
// })
// export class InfluxdbService {

//   private url = 'http://localhost:8086';
//   private token = 'M76buWN666c3iTUNAdYlJtP_tH8_KZJp6vdKID1345tfgvJhZvBcTMLP7f8SIOPPa7bSb9WMrw2jxeN_4OykOA==';
//   private org = 'My_Org';
//   private bucket = 'My_Buck';

//   private influxDB: InfluxDB;

//   constructor() {
//     this.influxDB = new InfluxDB({ url: this.url, token: this.token });
//   }

//   async getData(query: string): Promise<any[]> {
//     const queryApi = this.influxDB.getQueryApi(this.org);
//     const data: any[] = [];

//     // Incluye el bucket en la consulta
//     const fluxQuery = `from(bucket: "${this.bucket}") |> ${query}`;

//     return new Promise((resolve, reject) => {
//       queryApi.queryRows(fluxQuery, {
//         next(row: string[], tableMeta: FluxTableMetaData) {
//           const o = tableMeta.toObject(row);
//           data.push(o);
//         },
//         error(error: Error) {
//           reject(error);
//         },
//         complete() {
//           resolve(data);
//         },
//       });
//     });
//   }

//   async getData(query: string): Promise<any[]> {
//     const queryApi = this.influxDB.getQueryApi(this.org);
//     const data: any[] = [];

//     return new Promise((resolve, reject) => {
//       queryApi.queryRows(query, {
//         next(row: string[], tableMeta: FluxTableMetaData) {
//           const o = tableMeta.toObject(row);
//           data.push(o);
//         },
//         error(error: Error) {
//           reject(error);
//         },
//         complete() {
//           resolve(data);
//         },
//       });
//     });
//   }
// }
