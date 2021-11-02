import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
 import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  userSub: Subscription;
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private route: ActivatedRoute
  ) {}
  rate: number;

  async ngOnInit(): Promise<void> {
    this.userService.getLoggedinUser();
    this.userSub = this.userService.user$.subscribe(
      (data) => (this.user = data)
      );
      console.log(this.user)
    this.rate = await this.bitcoinService.getRate().toPromise();
  }
  onLogout(): void {
    // console.log(this.ngFormsform)
    this.userService.logout()
  }
  onLogin(form: NgForm): void {
    this.userService.login({...form.value})
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}


