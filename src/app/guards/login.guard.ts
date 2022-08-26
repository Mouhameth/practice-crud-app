import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad,  Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private authService:UserService,private router: Router){}
  canActivate() {
    return this.canLoad();
  }
  canLoad(){
      if (!this.authService.isLoggedInAdmin()) {
        this.router.navigate(['/home']);
      }
      return this.authService.isLoggedInAdmin();
  }
}
