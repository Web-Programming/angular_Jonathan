import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  protected housingLocationList: HousingLocation[] = []


  constructor() { }
  getAllHousingLocations():HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id):number:HousingLocation |undefined={
    return this.housingLocationList find(housingLocation =>)
  }
}
