import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("^[A-Za-z][A-Za-z0-9_]{2,29}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])
  })

  constructor(private router:Router) { }
  submit = false;
  loginUser(form:any){
    this.submit = true;
    if(this.loginForm.valid){
      if(this.loginForm.get("user")?.value==='admin' &&
      this.loginForm.get("password")?.value==='Admin@123'){
        this.router.navigate(['/navbar']);
    }else{
      alert("Entered credentials do not matched");
    }
    }else{
      alert("Enter correct username and password");
    }
  }

  
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  
    ngOnInit(): void {
    }
  
  }