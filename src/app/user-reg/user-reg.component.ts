import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
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
  }
}
