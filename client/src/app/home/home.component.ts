import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  //users:any;


  constructor() { }

  ngOnInit(): void {

  }


    registerToggle(){
      this.registerMode =!this.registerMode;
    }

    // getUsers(){
    //   this.http.get(this.accountService.baseUrl+"Users/GetUsers").subscribe(users=>this.users=users);
    // }

    cancelRegisterMode(event:boolean){
      this.registerMode=event;
    }
}
