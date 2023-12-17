import { Injectable } from "@angular/core";
import { User } from "src/Model/user";



export class UserService{
    url = 'http://localhost:3000/users';
    async getAllUsers(): Promise<User[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
      }
    
      async getUserById(id: number): Promise<User> {
        // console.log(id)
        const data = await fetch(`${this.url}/${id}`);
        return await data.json() ?? {};
      }
    
      submitApplication(firstName: string, lastName: string, email: string) {
        console.log(firstName, lastName, email);
      }

}