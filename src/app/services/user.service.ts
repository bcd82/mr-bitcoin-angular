import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { ContactService } from './contact.service';

const USERS = [
  {
    moves: <any>[],
    username: 'muki',
    password: '123',
    balance: 200,
    _id: 'u101',
  },
  {
    moves: <any>[],
    username: 'dudeman',
    password: '123',
    balance: 123,
    _id: 'u102',
  },
  {
    moves: <any>[],
    username: 'mandude',
    password: '123',
    balance: 666,
    _id: 'u103',
  },
];
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private contactService: ContactService) {}
  private _userDb: User[] = USERS;
  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  private _user$ = new BehaviorSubject<User>({} as User);
  public user$ = this._user$.asObservable();

  getLoggedinUser = (): void => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;
    delete user.password;
    this._user$.next(user);
  };

  logout = () => {
    this._user$.next({} as User);
    localStorage.removeItem('user');
  };

  login = (creds: { username: string; password: string }) => {
    const user: User = this._userDb.find(
      (u) => u.username === creds.username && u.password === creds.password
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this._user$.next({ ...user });
    }
  };
  async isUserLoggedin () {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?._id ? true : false
  }
  transferBits = async (contact: Contact, amount: number) => {
    const user = this._user$.getValue();
    user.balance -= +amount;
    console.log(user);
    contact.balance += +amount;
    this.contactService.saveContact({ ...contact });
    user.moves.unshift({ amount, transferTo: contact, sentOn: Date.now() });
    localStorage.setItem('user', JSON.stringify(user));
    this._user$.next({ ...user });
  };
}
