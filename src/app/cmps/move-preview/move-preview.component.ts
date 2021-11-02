import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {
  @Input() move:any
  @Input() user:User
  constructor() { }

  ngOnInit(): void {
    console.log(this.move)
  }

}
