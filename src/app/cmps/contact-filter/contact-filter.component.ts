import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  filterBy: any
  subscription: Subscription

  ngOnInit(): void {
      this.filterBy = this.contactService.filterBy$
  }

  onSetFilter() {
    this.contactService.setFilter({...this.filterBy})
  }
}
