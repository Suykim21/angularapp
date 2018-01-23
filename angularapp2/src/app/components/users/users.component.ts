import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main St',
          city: 'Los Angeles',
          state: 'CA'
        },
  
        isActive: true,
 
        registered: new Date('11/11/2016 10:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 35,
        address: {
          street: '50 Blah St',
          city: 'Chicago',
          state: 'IL'
        },
  
        isActive: false,
  
        registered: new Date('03/11/2017 06:30:00')
      },
      {
        firstName: 'Kate',
        lastName: 'Doe',
        age: 29,
        address: {
          street: '50 Boom St',
          city: 'Miami',
          state: 'FL'
        },
   
        isActive: true,

        registered: new Date('01/02/2018 08:30:00')
      }
    ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
