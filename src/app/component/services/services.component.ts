import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any=[];
  imageUrl:string=environment.imageBaseUrl + 'uploads/service/' ; 
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
