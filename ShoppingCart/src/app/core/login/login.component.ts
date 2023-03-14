import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login={
    'userId':'',
    'password':''
  }

  doSubmit():void{
      console.log(this.login)
  }

}
