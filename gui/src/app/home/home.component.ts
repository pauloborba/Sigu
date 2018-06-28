import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  constructor(servidor : HomeService) {
   
   }

  ngOnInit() {
     this.userForm = new FormGroup({
      login: new FormControl(),
      senha: new FormControl(),
    });
  }
  
  onSubmit(form): void {
    
    console.log(this.userForm.value.login);
  }
  
  
 
}
