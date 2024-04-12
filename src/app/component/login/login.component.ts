import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  /*Property declaration*/
  title: String = 'SNMpy'
  isValid: boolean = false
  loginForm: FormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required]
  })

  /* method (events handler) declaration */
  onSubmit() {
    console.log("submitted")
  }
  constructor (private fb: FormBuilder){}
}

