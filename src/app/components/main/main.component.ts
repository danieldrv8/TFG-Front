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
  imageShown: string = '';

  rooms: Room[] = [
    {
      sites: [
        { id: 1, occupied: false },
        { id: 2, occupied: true },
        { id: 3, occupied: false },
        { id: 4, occupied: false },
        { id: 5, occupied: false },
        { id: 6, occupied: true },
        { id: 7, occupied: false },
        { id: 8, occupied: true },
        { id: 9, occupied: false },
        { id: 10, occupied: true },
        { id: 11, occupied: true },
        { id: 12, occupied: false },
        { id: 13, occupied: true },
        { id: 14, occupied: false },
      ],
      temp: 20,
      name: 'Sala 1',
      image: '../../../assets/img/plano-biblioteca2.png'
    },
    {
      sites: [
        { id: 1, occupied: true },
        { id: 2, occupied: false },
        { id: 3, occupied: true },
        { id: 4, occupied: true },
        { id: 5, occupied: false },
        { id: 6, occupied: false },
        { id: 7, occupied: false },
        { id: 8, occupied: true },
        { id: 9, occupied: false },
        { id: 10, occupied: true },
        { id: 11, occupied: false },
        { id: 12, occupied: false },
        { id: 13, occupied: true },
        { id: 14, occupied: true },
      ],
      temp: 25,
      name: 'Sala 2',
      image: '../../../assets/img/plano-biblioteca2.png'
    }
  ];

  ngOnInit(): void {
    this.updateSitesShown();
    this.updateImageShown();
  }

  updateSitesShown(): void {
    this.sitesShown = this.rooms.find(room => room.name === this.selectedRoom)?.sites || [];
    this.updateImageShown();
  }

  updateImageShown(): void {
    this.imageShown = this.rooms.find(room => room.name === this.selectedRoom)?.image || '';
  }

}
