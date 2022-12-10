import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser = (sendData:any) => {
    return this.http.post("http://localhost:8080/useradd",sendData)
  }

  verifyUser = (sendData:any) => {
    return this.http.post("http://localhost:8080/userverify",sendData)
  }

  viewProfile = (sendData:any) => {
    return this.http.post("http://localhost:8080/viewprofile",sendData)
  }

  addComplaint = (sendData:any) => {
    return this.http.post("http://localhost:8080/addcomplaint",sendData)
  }
}
