import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private userService:UserService) { }
public User={
  id:'',
  name:'',
  email:'',
  pass:''
};
  ngOnInit(): void {
  }
formSubmit(){
  console.log(this.User);
  if(this.User.id==null || this.User.id==''){
    alert("empty !!!!!!!!!!...................");
  }
  alert("form Submitted!!!!!!!!");

this.userService.addUser(this.User).subscribe(
  (data)=>{console.log(data);
  alert('success-----');
},
  (error)=>{console.log('errror-----------');
  alert('errroor--------');
  }
);
}

}