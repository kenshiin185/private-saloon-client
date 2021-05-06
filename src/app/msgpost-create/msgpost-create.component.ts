import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { Msgpost } from '../class/msgpost';
import { AuthService } from './../auth.service';
import { MsgpostService } from './../msgpost.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-msgpost-create',
  templateUrl: './msgpost-create.component.html',
  styleUrls: ['./msgpost-create.component.css']
})
export class MsgpostCreateComponent implements OnInit {
  id:string;
  dataUser:User;
   user: any;
   img: any;
  pathImage='http://localhost:3000/uploads/'
  formPostMessage: FormGroup = new FormGroup({
    user: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });
  constructor(private authService: AuthService,
    private msgpostService: MsgpostService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCurrentUser(id);
  }
  sendMessage() {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCurrentUser(id);
  } 
  getCurrentUser(id:string){
    this.authService
    .getUserById(id)
    .subscribe((data)=> {
      data._id = id;
      this.user = data.user;
      this.img = data.image;
      this.dataUser = data;
      console.log('user :',data);    
      /************************* */
      console.log('insend>>>',this.dataUser._id,this.user,this.img);
      let newMessage = new Msgpost();
      newMessage.user =this.user;
      newMessage.image = this.img;
      newMessage.content = this.formPostMessage.value;
      console.log('contenu >>==::',this.formPostMessage.value);
    });
  }
  //endClass
}

