import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = `http://localhost:8080/api/users`;
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.API_URL)
  }
  AddUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.API_URL, user)
  }
  UpdateUser(user: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(this.API_URL, user)
  }
  DeleteUser(id: number | string): Observable<IUsers> {
    return this.http.delete<IUsers>(`${this.API_URL}/${id}`)
  }
  signIn(user: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/signin`, user)
  }
  signUp(user: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/signup`, user)
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
}
