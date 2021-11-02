import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }
  subscription: Subscription;
  // isEdit = false;
  contact: Contact = null;
  async ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = {...data.contact} || this.contactService.getEmptyContact() as Contact;
      // if (data.contact) {
      //   this.contact = { ...data.contact };
      //   this.isEdit = true;
      // } else {
      //   this.contact = this.contactService.getEmptyContact() as Contact;
      // }
    });
  }
  async onSubmit() {
    await this.contactService.saveContact(this.contact)
    this.router.navigate(['contacts'])
  }
  async onRemove() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['contacts'])
  }
}
