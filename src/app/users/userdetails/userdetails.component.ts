import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/Model/user';
import { UserService } from 'src/services/user.service';
import { Location } from '@angular/common';
import { Route, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserService]
})
export class UserdetailsComponent  {
    
  newuser: User = {
    id: 0,
    name: "",
    mobile: 0,
    email: "",
    password: "",
    address: ""
  };
  Uname: string = "";
  Umobile: number = 0;
  Uemail: string = "";
  Uaddress: string = "";
  Passname: string = "";



  @ViewChild('registrationform') form!: NgForm

  constructor( private route: ActivatedRoute, private userService: UserService, private location: Location) {
   
  };
 

  goBack(): void {
    this.location.back();
  }

  onsubmitclick() {
    // this.newuser.id = this.userData.id;

    console.log(this.form)
    this.newuser.name = this.Uname;
    this.newuser.email = this.Uemail;
    this.newuser.mobile = this.Umobile;
    this.newuser.password = this.Passname;
    this.newuser.address = this.Uaddress;

    // if (!this.newuser) { return; }
    // this.userService.adduser(this.newuser).subscribe({
    //   next: (val: any) => {
    //     console.log("add data" + val)
    //     this.goBack();
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   }
    // })
  }
}

// this.route.params.subscribe((params: Params) => {
//   this.userId = params['id'];

// });
// this.userService.getUserById(this.userId).then((userdata: User) => {
//   this.userData = userdata;
//   console.log(this.userData)
//   this.form.setValue({
//     uname: this.userData.name,
//     umobile: this.userData.mobile,
//     uemail: this.userData.email,
//     uaddress: this.userData.address
//   })

// })

// if(!this.newuser){ return ;}
// this.userService.adduser(this.newuser).subscribe({
//   next:(val:any)=>{
//       console.log("add data"+val)
//   },
//   error:(err:any)=>{
//     console.log(err);
//   }
// })
