import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hapus-aspek',
  templateUrl: './hapus-aspek.component.html',
  styleUrls: ['./hapus-aspek.component.scss']
})
export class HapusAspekComponent implements OnInit {

  constructor(
    private modalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

}
