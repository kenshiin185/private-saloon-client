import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msgpost } from './models/msgpost';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgpostService {
  baseUrl = 'http://localhost:3000/api/v1/msg-posts';
  private msgpostCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  createMsgpost(msgpost: Msgpost) {
    return this.httpClient.post<Msgpost>(this.baseUrl, msgpost);
  }
  dispatchMsgpostCreated(id: string) {
    this.msgpostCreated.next(id);
  }
  handlemsgpostCreated() {
    return this.msgpostCreated.asObservable();
  }

  getmsgposts(): Observable<Msgpost[]> {
    return this.httpClient.get<Msgpost[]>(`${this.baseUrl}/`);
  }

  getmsgpostsById(id): Observable<Msgpost> {
    return this.httpClient.get<Msgpost>(`${this.baseUrl}/${id}`)
  }

}
