import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {
  constructor(private userService: UserService) { }
  
  async resolve(route: ActivatedRouteSnapshot) {
    this.userService.getLoggedinUser();
  }

}
