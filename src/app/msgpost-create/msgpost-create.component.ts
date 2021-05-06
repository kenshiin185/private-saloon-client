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
  userRecu:string="";
  imageRecu:string="";
   user: string;
   img: string;
  pathImage='http://localhost:3000/uploads/'
  formPostMessage: FormGroup = new FormGroup({
    user: new FormControl(""),
    image: new FormControl(""),
    content: new FormControl("", [Validators.required]),
  });
  constructor(private authService: AuthService,
    private msgpostService: MsgpostService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
  
    this.userRecu = this.activatedRoute.snapshot.params.utilisateur;console.log('user recu', this.userRecu);
    this.imageRecu = this.activatedRoute.snapshot.params.image;console.log('image recue', this.imageRecu);
    this.user = this.userRecu;
    this.img = this.imageRecu;
    
  }
  sendMessage() {
  
    let newMessage = new Msgpost();
    newMessage.user =this.userRecu;
    newMessage.image = this.imageRecu;
    newMessage.content = this.formPostMessage.value.content;
    console.log('contenu >>==::',this.formPostMessage.value);
    /**************************** */
    this.msgpostService
      .createMsgpost(newMessage) //récupération de la valeur de tous les inputs
      .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    console.log('<<<<<<', newMessage);
  

  }
  handleSuccess(data) {
    console.log('ok', data);
    this.formPostMessage.reset();
    // formDirective.resetForm();
    this.msgpostService.dispatchMsgpostCreated(data._id);
    console.log('handle>>>>>', this.formPostMessage.value);
  }

  handleError(error) {
    console.log('Erreur lors de la soumission du message ',error);
  }
   //endClass
}

