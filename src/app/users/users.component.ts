import { Component } from '@angular/core';
import { User } from 'src/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent  {
  listUser?:User[];
  constructor(private UserService:UserService) {
    this.UserService.getAllUsers().then((housingLocationList: User[]) => {
      this.listUser = housingLocationList;
      // this.filteredLocationList = housingLocationList;
      console.log(this.listUser);
    });

  }

}
