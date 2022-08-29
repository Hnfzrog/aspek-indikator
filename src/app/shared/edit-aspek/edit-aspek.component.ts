import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-aspek',
  templateUrl: './edit-aspek.component.html',
  styleUrls: ['./edit-aspek.component.scss']
})
export class EditAspekComponent implements OnInit {

  constructor(
    private modalRef:BsModalRef,
  ) { }

  ngOnInit() {
  }

}
