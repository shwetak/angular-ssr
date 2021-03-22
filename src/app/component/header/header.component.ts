import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  services:any=[];
  constructor(private service:AccountService, private router:Router) { }

  ngOnInit() {
    this.getServiceStates();
  }

  getServiceStates() {
    this.service.getAllService().subscribe(data=>{
      debugger;
      if(data.code=='200'){
        this.services=data.result;
      }else{
        this.services=[];
      }
    },error=>{
      this.services=[];
    })
  }


}
