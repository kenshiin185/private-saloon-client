import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-connect-user',
  templateUrl: './connect-user.component.html',
  styleUrls: ['./connect-user.component.css']
})
export class ConnectUserComponent implements OnInit {
user:User = {user:'',password:''};
id:string;
  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
  }

  login() {
    console.log('user', this.user);
    this.authService.login(this.user)
    .subscribe(data=> this.handleSuccess(data), error => this.handleError(error));
  }
  handleSuccess(data){
    console.log('loggé', data);
    this.id = data.user._id;
    console.log( this.id);
    this.router.navigate([`/salon/${this.id}`]);
  }
  handleError(data) {
    console.log('pas loggé', data);
    this.router.navigate(['/auth']);
  }
}
