import { AuthAPIService } from '@api/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSignIn: boolean;

  constructor(
    private userService: UserService,
    private authAPI: AuthAPIService
  ) { }

  ngOnInit() {
    this.isSignIn = this.userService.accessToken && true;
  }

  onSignOutClick() {
    this.authAPI.signOut().subscribe(res => {
      this.isSignIn = false;
     });
  }

}
