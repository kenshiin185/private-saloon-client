import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Msgpost } from '../models/msgpost';
import { MsgpostService } from '../msgpost.service';

@Component({
  selector: 'app-msgpost',
  templateUrl: './msgpost.component.html',
  styleUrls: ['./msgpost.component.css']
})
export class MsgpostComponent implements OnInit {

  msgpost$:Observable<Msgpost>;

  constructor(private msgPostService:MsgpostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.msgpost$ = this.msgPostService.getmsgpostsById(id);
    
  }

}
