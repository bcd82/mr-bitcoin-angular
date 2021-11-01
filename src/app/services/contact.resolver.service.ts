import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService {
  constructor(private contactService: ContactService) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id;
    
    const contact = await this.contactService.getContactById(id).toPromise();
    return contact;
  }
}
