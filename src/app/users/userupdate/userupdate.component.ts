import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css'],
  providers:[UserService]
})
export class UserupdateComponent {
  userId!: number;
  userData!: User;

  Uname: string = "";
  Umobile: number = 0;
  Uemail: string = "";
  Uaddress: string = "";
  

  newuser: User = {
    id: 0,
    name: "",
    mobile: 0,
    email: "",
    password: "",
    address: ""
  };

  @ViewChild('registrationform') form!: NgForm

  constructor( private route: ActivatedRoute, private userService: UserService,private location:Location) {
   
  };
  
  ngOnInit(): void {


    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUserById(id).subscribe((hero) => {
      this.userData = hero;
      this.form.setValue({
        uname: this.userData.name,
        umobile: this.userData.mobile,
        uemail: this.userData.email,
        uaddress: this.userData.address
      })


    });
  }

  goback()
  {
    return this.location.back();
  }
  onsubmitclick()
  {

    // console.log(this.userData.id);
    this.newuser.id=this.userData.id;
    this.newuser.name=this.form.value.uname;
    this.newuser.email=this.form.value.uemail;
    this.newuser.address=this.form.value.uaddress;
    this.newuser.mobile=this.form.value.umobile;
    this.newuser.password=this.userData.password;

    // console.log(this.newuser)

    if (this.newuser) {
        this.userService.updateuser(this.newuser)
          .subscribe(updatedData => {
            console.log('Data updated:', updatedData);
            // Optionally, update local jsonData with updatedData
            // this.userData = updatedData;
            this.goback();
          });
      }

  }

}
