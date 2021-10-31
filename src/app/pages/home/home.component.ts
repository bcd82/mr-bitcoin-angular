import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService : UserService, private bitcoinService : BitcoinService) { }
  user:User
  rate:number
  marketPrice:[{x:number, y:number}]
  async ngOnInit(): Promise<void> {
    this.user = this.userService.getLoggedinUser()
    this.rate =  await this.bitcoinService.getRate().toPromise()
    this.marketPrice =  await this.bitcoinService.getMarketPrice().toPromise()

  }

}
