import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import User from 'src/app/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  data: any
  user?: any;
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getUserByID(id).subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  submit() {
    this.data = this.form.value;
    this.user.name = this.data.name;
    this.user.email = this.data.email;
    console.log(this.data);
    this.userService.updateUser(this.user?.id,this.user).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['/'])
  }
}
