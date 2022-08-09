import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted : boolean = false
  ok : boolean = false
  constructor(private store : Store<any> ,private fb: FormBuilder,
     private router : Router,private userService:UserService) { }

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })
  ngOnInit(): void {
  }

  login(){
    this.submitted =true
    if(this.loginForm.invalid)
    return;
    this.ok = this.userService.login(this.loginForm.value)
    if(this.ok){
      this.router.navigate(['home-admin'])
    }

    return;
     
  }

 
}
