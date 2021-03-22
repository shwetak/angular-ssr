import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment';
import {AccountService} from 'src/app/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: any = [];
  states: any = [];
  currentService: any = [];
  currentServiceState: any = [];
  errMsg: string = '';
  errShow: boolean = false;
  constructor(private service: AccountService, private router: Router) { }

  ngOnInit() {
    this.getServices();


  }


  getServices() {
    this.service.getAllService().subscribe(data => {
      debugger;
      if (data.code == '200') {
        this.services = data.result;
      } else {
        this.services = [];
      }
    }, error => {
      this.services = [];
    })
  }

  serviceChange(event) {
    this.currentService = this.services[event.currentTarget.value];
    this.getServiceStates(this.currentService.id);
  }
  serviceStateChange(event) {
    this.currentServiceState = this.states[event.currentTarget.value];
  }

  getServiceStates(id) {
    this.states = [];
    this.service.getServiceStates(id).subscribe(data => {
      if (data.code == '200') {
        this.states = data.result;
      } else {
        this.states = [];
      }
    }, error => {
      this.states = [];
    })
  }

  search() {
    debugger;
    if (this.currentService.length == 0) {
      this.errShow = true;
      this.errMsg = 'Please select Service';
    } else {
      if (this.currentServiceState.length == 0) {
        this.router.navigate(['/' + this.currentService.permalink]);
      } else {
        this.router.navigate(['/' + this.currentService.permalink + '/' + this.currentServiceState.permalink]);
      }
    }
  }


}