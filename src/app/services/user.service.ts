import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
const USERS =
    [{
        username: "muki",
        password: "123",
        balance: 200,
        _id: 'u101',
    },
    {
        username: "dudeman",
        password: "123",
        balance: 123,
        _id: 'u102',
    },
    {
        username: "mandude",
        password: "123",
        balance: 666,
        _id: 'u103',
    },

    ]
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _userDb: User[] = USERS;
  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  getLoggedinUser = ():User =>{
    const user = JSON.parse(localStorage.getItem('user')) 
    if (!user) {
      localStorage.setItem('user',JSON.stringify(this._userDb[0]))
      return this._userDb[0]
    }
    return user
}
}