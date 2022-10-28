import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import{ User} from './../components/users-control/user-control/user-control-interface'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private urlAPI: string = 'http://localhost:3000';

  getTokenAuth(credential: object): Observable<any> {
    console.log('CREDENTIAL', credential);
    return this.http.post<any>(this.urlAPI + '/auth', credential, httpOptions);
  }

  // getUserByEmail(email: string): Observable<User> {
  //   return this.http.get<User>(this.urlAPI + `/users/${email}`);
  // }
}

// email?: string | null | undefined;
//   password?: string | null | undefined;
