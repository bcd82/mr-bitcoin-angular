import { Component, Input, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts:Observable<Contact[]>

  constructor() { }

  ngOnInit(): void {
  }

}
