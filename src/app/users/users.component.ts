import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  listUser!:User[];
  duser!:User[];
  constructor(private UserService:UserService,private router:Router) {
    // this.UserService.getAllUsers().then((housingLocationList: User[]) => {
    //   this.listUser = housingLocationList;
    //   // this.filteredLocationList = housingLocationList;
    //   console.log(this.listUser);
    // });

  }
  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((luser)=>this.listUser=luser);
  }
  ondeleteuser(user:User)
  {
    this.UserService.deletelist=this.listUser.filter(u=>u===user);
    this.listUser = this.listUser.filter(u => u !== user);
    this.UserService.deleteuser(user.id).subscribe((val)=>{
      console.log(val);
      console.log(this.UserService.deletelist)
    });
    
  }
  onnavigate()
  {
    this.router.navigate(['/users/add'])
  }


}
