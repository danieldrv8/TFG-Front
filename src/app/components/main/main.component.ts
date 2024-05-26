import { Component, OnInit } from '@angular/core';
import { Room } from '../../interfaces/room';
import { Site } from '../../interfaces/site';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public selectedRoom?: string;
  sitesShown: Site[] = [];

  rooms: Room[] = [
    {
      sites: [
        { id: 1, occupied: false },
        { id: 2, occupied: true },
        { id: 3, occupied: false },
        { id: 4, occupied: false }
      ],
      temp: 20,
      name: 'Sala 1',
      image: ''
    },
    {
      sites: [
        { id: 1, occupied: true },
        { id: 2, occupied: false },
        { id: 3, occupied: true },
        { id: 4, occupied: true }
      ],
      temp: 25,
      name: 'Sala 2',
      image: ''
    }
  ];

  ngOnInit(): void {
    this.updateSitesShown();
  }

  updateSitesShown(): void {
    this.sitesShown = this.rooms.find(room => room.name === this.selectedRoom)?.sites || [];
  }

}
