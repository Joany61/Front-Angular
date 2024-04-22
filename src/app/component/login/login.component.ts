import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  /*Property declaration*/
  title: String = 'SNMpy'
  isValid: boolean = false
  loginForm: FormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required]
  })

  getUsername(){
    return this.loginForm.get('username')
  }

  ngOnInit(): void {

  }

  /* method (events handler) declaration */
  onSubmit() {
    console.log("submitted")
  }
  constructor (private fb: FormBuilder){}
}

