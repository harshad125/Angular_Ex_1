import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from 'src/Model/city';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css'],
  providers:[CityService]
})
export class CitydetailsComponent implements OnInit {
  cityId!:number;
  citydata!:City

  Cname!:string;
  Ccountry!:string;
  Cpopulation!:number
  @ViewChild('registrationform') form!:NgForm
  constructor(private route:ActivatedRoute,private cityservice:CityService)
  {

  };
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cityId = params['id'];

    });
    this.cityservice.getCityById(this.cityId).then((citydata: City) => {
      this.citydata = citydata;
      console.log(this.citydata)
      this.form.setValue({
        cname:this.citydata.city,
        ccountry:this.citydata.country,
        cpopulation:this.citydata.population
      })
    })
  }

  onsubmitclick()
  {

  }



}
