import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-complaints',
  templateUrl: './view-user-complaints.component.html',
  styleUrls: ['./view-user-complaints.component.css']
})
export class ViewUserComplaintsComponent {
  userId:any = ""
  fetchedComplaints:any = []
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any = {
      "id":this.userId
    }

    this.api.viewMyComplaints(data).subscribe(
      (response:any) => {
        this.fetchedComplaints = response
      }
    )
  }
  

}
