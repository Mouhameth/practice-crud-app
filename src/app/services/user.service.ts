import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.api
   private loggedUser: string = ''
  constructor(private http : HttpClient) { }

  public login(user:User):boolean{
     if(user.email === 'admin' && user.password === 'passer'){
      this.doLoginAdmin("ihuefjruhfygè5FHGFDvbnevh6jkh")
      return true;
     }
     else{
      return false;
     }
  }


  isLoggedInAdmin() {
    return !!this.getAdminJwtToken();
  }

  getAdminJwtToken() {
    return localStorage.getItem('token');
  }


  doLoginAdmin(token: string) {
    this.storeAdminTokens(token);
  }

  doLogoutUser() {
    this.loggedUser = '';
    this.removeTokens();
  }

  private storeAdminTokens(token:string) {
    localStorage.setItem('token', token);
  }

   removeTokens() {
    localStorage.removeItem('token');
  }
  
}
