import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private userService: UserService
  ) {}

  user: User;
  contactSub: Subscription;
  userSub: Subscription;
  isTransfer = false;
  contact: any = null;
  timeOut:any;
  async ngOnInit() {
    this.contactSub = this.route.data.subscribe((data) => {
      this.contact = data.contact;
    });
    this.userSub = this.userService.user$.subscribe(
      (data) => (this.user = data)
    );
    // console.log(this.user)
  }
  async onTransfer(form: NgForm) {
    const { amount } = form.value;
    if (!amount) return
    this.userService.transferBits(this.contact, amount);
    form.value.amount = 0;
    
    console.dir(form)
    this.timeOut =setTimeout(()=>{
      form.resetForm()
    },3000)
  }
  ngOnDestroy() {
    this.contactSub.unsubscribe();
    this.userSub.unsubscribe();
    if(this.timeOut) clearTimeout(this.timeOut);
  }
}
