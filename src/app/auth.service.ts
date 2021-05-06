import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:3000/auth';
baseUrlUser= 'http://localhost:3000/auth/register';
baseUrlGetUser='http://localhost:3000/auth/users';

isAuthenticated = false;
  constructor(private http: HttpClient) { }

  login(user:User) {
    this.isAuthenticated = true;
    return this.http.post<User>(`${this.baseUrl}/login`, user);
  }
  logout() {
    this.isAuthenticated = false;
    return this.http.get(`${this.baseUrl}/logout`);
  }
  createUser(user:User) {
    return this.http.post<User>(`${this.baseUrlUser}`, user)
  }
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrlGetUser}/`);
  }
  getUserById(id): Observable<User> {
    return this.http.get<User>(`${this.baseUrlGetUser}/${id}`);
  }

  uploadImage(formData: FormData) {
    return this.http.post<any>(`${this.baseUrlUser}/images`, formData);
  }
}
