import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  login(u) {
    console.log('idtoken inside logservice'+u);
    return this.http.post('http://localhost:3001/api/authenticate',{id:u});
  }


}
