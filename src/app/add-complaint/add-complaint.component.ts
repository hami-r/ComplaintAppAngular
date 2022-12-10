import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  complaint = ""

  constructor(private api:ApiService){}

  readValues = () => {
    let data:any = {
      "userId":localStorage.getItem("userInfo"),
      "complaint":this.complaint
    }
    console.log(data);
    
    this.api.addComplaint(data).subscribe(
      (response:any) => {
        if(response.status == "success"){
          alert("Added successfully")
          this.complaint = ""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
