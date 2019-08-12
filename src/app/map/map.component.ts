import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'app';
  lat = -33.785809;
  lng = 151.121195;

  constructor() { }

  ngOnInit() {
  }

}
