import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit{

  RegisterForm: FormGroup

  RegisterForm1: FormGroup

  RegisterForm2: FormGroup
    
  valuefromuser:any;

  valuefromusera:any;

  valuefromuserab:any;

  constructor(public route: Router) {}

  async loginsubmit()
  {
      this.route.navigate(['/home']);
  }

  async formsubmit()
  {
      this.route.navigate(['/app-tabmenu']);
  }
    
  submit(){
    console.log('value is = ', this.valuefromuser);
  }

  
  ngOnInit() {
    this.RegisterForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ])
    })

    this.RegisterForm1 = new FormGroup({
      name1: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6)
      ])
    })

    this.RegisterForm2 = new FormGroup({
      name2: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6)
      ])
    })

  }
    

}
