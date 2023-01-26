import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  userId: any;
  constructor(private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId=this.activatedRoute.snapshot.params['id'];
  }

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get getName() {
    return this.loginForm.controls['name'];
  }
  get getEmail() {
    return this.loginForm.controls['email'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }

  login(e: any) {
    if (this.loginForm.status == 'VALID') {
      this.userService.addUser(this.loginForm.value).subscribe((response) => {

      })
      this.router.navigate(['users']);
    }
  }
  // editUser(){}
}
