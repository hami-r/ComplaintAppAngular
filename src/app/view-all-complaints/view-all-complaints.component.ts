import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-complaints',
  templateUrl: './view-all-complaints.component.html',
  styleUrls: ['./view-all-complaints.component.css']
})
export class ViewAllComplaintsComponent {
  constructor(private api:ApiService){
    this.api.viewAllComplaint().subscribe(
      (response:any) => {
        this.complaints=response
      }
    )
  }
  complaints:any = []
}
