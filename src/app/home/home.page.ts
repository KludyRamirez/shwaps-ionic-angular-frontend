import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage implements OnInit{

  RegisterForm: FormGroup

  RegisterForm1: FormGroup
    
  valuefromuser:any;

  valuefromusera:any;

  constructor(public route: Router, private alertController: AlertController) {}

  regsubmit()
    
    {
      this.route.navigate(['registration']);
    }

  async formsubmit()
  {
    let username: string = "kludy@gmail.com";
    let password: string = "kludyadmin";
    let inputemail = (document.getElementById("email") as HTMLInputElement).value;
    let inputpass = (document.getElementById("pass") as HTMLInputElement).value;
    

    if (inputemail === username && inputpass === password && inputemail !== "" && inputpass)
    {
      this.route.navigate(['app-tabmenu']);
    }
    else
    {
      let alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Invalid Email or Password',
        message: 'Please type your information correctly!',
        buttons: ['OK'],
      });
      await alert.present();
      var dirtyFormID = 'formi';
      var dirtyFormID1 = 'formi1';
      var reset = <HTMLFormElement>document.getElementById(dirtyFormID);
      var reset1 = <HTMLFormElement>document.getElementById(dirtyFormID1);
      reset.reset();
      reset1.reset();
    }
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

  }
    

}
