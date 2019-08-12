import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private fakeMapPointers: Array<IMapPointer>;

  constructor() {
    this.createFakeMapPoints();
  }

  public getMapPoints(): Observable<Array<IMapPointer>> {
    return of(this.fakeMapPointers);
  }

  /*
  PRIVATE METHODS
  */

  private createFakeMapPoints(): void {
    this.fakeMapPointers = [
      { lat: 53.489656, lng: -2.241142, showInfo: false },
      { lat: 53.463238, lng: -2.291329, showInfo: false }
    ];
  }

}

export interface IMapPointer {
  lat: number;
  lng: number;
  showInfo: boolean;
}

