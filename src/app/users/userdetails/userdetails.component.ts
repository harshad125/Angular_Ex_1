import { AfterViewInit, Component, OnInit } from '@angular/core';
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
    })

  }







}
