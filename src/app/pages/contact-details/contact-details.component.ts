import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}
  contact: any = null;
  async ngOnInit() {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.contact = await this.contactService.getContactById(id).toPromise();
    }
  }
}
