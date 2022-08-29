import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hapus-data-satuan',
  templateUrl: './hapus-data-satuan.component.html',
  styleUrls: ['./hapus-data-satuan.component.scss']
})
export class HapusDataSatuanComponent implements OnInit {

  constructor(
    private modalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

}
