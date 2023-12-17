import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserService]
})
export class UserdetailsComponent implements OnInit {
  userId!: number;
  userData!: User;

  Uname: string = '';
  Umobile: number = 0;
  Uemail: string = ''
  Uage: number = 0
  Uaddress: string = ""
  @ViewChild('registrationform') form!: NgForm

  constructor(
    private route: ActivatedRoute,
    private userService: UserService // Your user service
  ) {
  };
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];

    });
    this.userService.getUserById(this.userId).then((userdata: User) => {
      this.userData = userdata;
      console.log(this.userData)
      this.form.setValue({
        uname: this.userData.name,
        umobile: this.userData.mobile,
        uemail: this.userData.email,
        uaddress: this.userData.address
      })

    })
  }
  onsubmitclick() {
    
  }
}
