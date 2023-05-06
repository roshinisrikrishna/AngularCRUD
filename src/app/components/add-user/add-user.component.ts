import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private userService: UsersService,private router:Router ){}
  data: any
  ngOnInit():void{}
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email:new FormControl('',Validators.required),
    gender : new FormControl('',Validators.required)
  })

  addUser(){
    this.data=this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/']) //redirect to homepage
    })
  }

}
