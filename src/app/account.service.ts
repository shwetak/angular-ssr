import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
//import { BaseHttpService } from './base-http-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {  
  private baseUrl = environment.apiBaseUrl;
  private getStatesUrl = this.baseUrl + 'getStates';
  private addServiceUrl = this.baseUrl + 'addService';
  private getServiceUrl = this.baseUrl + 'getServicePermalink';
  private getAllServiceUrl = this.baseUrl + 'getAllService';
  private deleteServiceUrl = this.baseUrl + 'deleteService';
  private getAllTargetStatesUrl = this.baseUrl + 'getAllTargetStates';
  private getTargetStateUrl = this.baseUrl + 'getTargetState';
  private getServiceStateUrl = this.baseUrl + 'getServiceState';
  private loginUrl = this.baseUrl + 'login';
  constructor(private httpClient:HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Headers' : 'Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      //'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    })
  }
  
  getStates():Observable<any>{
    return this.httpClient.get(this.getStatesUrl);      
  }
  getService(permalink:string):Observable<any>{
    return this.httpClient.get(this.getServiceUrl + '/' + permalink);      
  }
  getTargetState(service:string,permalink:string):Observable<any>{
    return this.httpClient.get(this.getTargetStateUrl + '/' + service + '/' + permalink);      
  }
  getServiceStates(id:string):Observable<any>{
    return this.httpClient.get(this.getServiceStateUrl + '/' + id);      
  }
  getAllService():Observable<any>{
    return this.httpClient.get(this.getAllServiceUrl);      
  }
  deleteService(id:string):Observable<any>{
    return this.httpClient.get(this.deleteServiceUrl + '/' + id);
  }
  getAllTargetStates():Observable<any>{
    return this.httpClient.get(this.getAllTargetStatesUrl);
  }
}