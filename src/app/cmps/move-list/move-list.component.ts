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

  filteredMoves:Move[]

  ngOnInit(): void {
  this.filterMoves()
}
  ngOnChanges(changes:User): void {
   this.filterMoves()
  }
  
  filterMoves(){
    if (this.contact?._id) {
      this.filteredMoves = this.user.moves.filter(move => move.transferTo._id === this.contact._id)
    }
    else this.filteredMoves = this.user.moves
  }
}
