import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent implements OnInit {
  @Input() user: User;
  @Input() contact: Contact;

  ngOnInit(): void {

  }
}
