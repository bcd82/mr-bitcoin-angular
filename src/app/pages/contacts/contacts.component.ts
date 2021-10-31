import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: Contact[]
  constructor(private contactService: ContactService) { }
  contacts$ :Observable<Contact[]>;
  
  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$;
  }

}
