import { Component, OnInit } from '@angular/core';
import { MapService, IMapPointer } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'app';
  lat = -33.785809;
  lng = 151.121195;

  public mapPoints: Array<IMapPointer>;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.initialiseProperties();
  }

  showInfo(p: IMapPointer) {
    p.showInfo = true;

  }

  hideInfo(p: IMapPointer) {
    p.showInfo = false;
  }


  private initialiseProperties(): void {
    this.mapPoints = [];
    this.getMapPoints();
  }


  private getMapPoints(): void {
    this.mapService.getMapPoints().subscribe(
      (mapPoints => this.mapPoints = mapPoints)
    );
  }

}
