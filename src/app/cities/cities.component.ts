import { Component } from '@angular/core';
import { City } from 'src/Model/city';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers:[CityService]
})
export class CitiesComponent {
  listcity?:City[];
  constructor(private CityService:CityService) {
    this.CityService.getAllCitys().then((housingLocationList: City[]) => {
      this.listcity = housingLocationList;
      // this.filteredLocationList = housingLocationList;
      console.log(this.listcity);
    });

  }
}
