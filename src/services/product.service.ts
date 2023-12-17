import { Injectable } from "@angular/core";
import { Product } from "src/Model/product";
import { User } from "src/Model/user";



export class ProductService{
    url = 'http://localhost:3000/products';
    async getAllProducts(): Promise<Product[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
      }
    
      async getProductById(id: number): Promise<Product> {
        const data = await fetch(`${this.url}/${id}`);
        return await data.json() ?? {};
      }
    
      submitApplication(firstName: string, lastName: string, email: string) {
        console.log(firstName, lastName, email);
      }

}