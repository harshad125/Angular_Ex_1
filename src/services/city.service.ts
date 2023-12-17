import { Injectable } from "@angular/core";
import { City } from "src/Model/city";
import { User } from "src/Model/user";



export class CityService{
    url = 'http://localhost:3000/cities';
    async getAllCitys(): Promise<City[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
      }
    
      async getCityById(id: number): Promise<City> {
        const data = await fetch(`${this.url}/${id}`);
        return await data.json() ?? {};
      }
    
      submitApplication(firstName: string, lastName: string, email: string) {
        console.log(firstName, lastName, email);
      }

}