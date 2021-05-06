import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Msgpost } from '../models/msgpost';
import { User } from '../models/user';
import { MsgpostService } from '../msgpost.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-msgpost-list',
  templateUrl: './msgpost-list.component.html',
  styleUrls: ['./msgpost-list.component.css']
})
export class MsgpostListComponent implements OnInit {
  allMsgposts: Msgpost[];
  users: User[]
  imagePath = environment.imagePath;
  // msgPostList$: Observable<Msgpost[]>;

  constructor(private msgPostService: MsgpostService, 
    private authService: AuthService, 
    private router:Router) { }

  ngOnInit() {
    // this.msgPostList$ = this.msgPostService
    // .getmsgposts();
    if(!this.authService.isAuthenticated) {
      this.router.navigate(['/auth']);
    }
    this.msgPostService.getmsgposts()
      .subscribe(data => this.refresh(data));

    this.msgPostService.handlemsgpostCreated()
      .subscribe(data => {
      
        this.refresh(data);
      });

    this.authService.getUsers()
    .subscribe(dataUsers => {console.log('liste users', dataUsers);this.refresh(dataUsers)}) ;
    

  }

  refresh(data) {
   
    this.msgPostService.getmsgposts().subscribe(data => {
      this.allMsgposts = data;
    });
  }

  logout() {
    this.authService
    .logout()
    .subscribe(data=> {
      
      this.router.navigate(['/auth']);

    }, err => console.error('erreur lors de la déconnexion'));
  }
}
