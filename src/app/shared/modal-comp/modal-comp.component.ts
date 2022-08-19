import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.scss']
})
export class ModalCompComponent implements OnInit {

  @Input('dataFromParent') public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit():void {
  }

}
