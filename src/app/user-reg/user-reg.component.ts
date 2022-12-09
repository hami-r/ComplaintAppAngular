import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  constructor(private api:ApiService) {}
  name = ""
  address = ""
  email = ""
  phoneNo = ""
  username = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "username":this.username,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    console.log(data);
    this.api.addUser(data).subscribe(
      (response:any) => {
        console.log(response);
        if(this.password != this.confirmPassword){
          alert("Passwords do not match")
        } else{
          if(response.status == "success"){
            alert("User registered successfully")
            this.name = ""
            this.address = ""
            this.email = ""
            this.phoneNo = ""
            this.username = ""
            this.password = ""
            this.confirmPassword = ""
          } else {
            alert("Something wrong")
          }
        } 
      }
    )
  }
}
