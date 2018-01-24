import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',

        isActive: true,
        hide: true,

        registered: new Date('11/11/2016 10:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',

        isActive: false,
        hide: true,

        registered: new Date('03/11/2017 06:30:00')
      },
      {
        firstName: 'Kate',
        lastName: 'Doe',
        email: 'kate@gmail.com',

        isActive: true,
        hide: true,

        registered: new Date('01/02/2018 08:30:00')
      }
    ];
    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   }
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log(value, valid);
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date()
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }

}