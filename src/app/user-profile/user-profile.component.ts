import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  userId:any = ""
  fetchedData:any = []

  constructor(private api:ApiService){
    this.userId = localStorage.getItem("userInfo")
    console.log(this.userId);
    let data:any = {
      "id":this.userId
    }
    console.log(data);
    
    this.api.viewProfile(data).subscribe(
      (response:any) => {
        this.fetchedData=response
      }
    )
  }

}
