import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from 'src/app/shared/modal-comp/modal-comp.component';
import { EditAspekComponent } from 'src/app/shared/edit-aspek/edit-aspek.component';
import { HapusAspekComponent } from 'src/app/shared/hapus-aspek/hapus-aspek.component';

export interface PeriodicElement {
  name: string;
  position: number;
  // symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'SKS'},
  { position: 2, name: 'SKS'},
  { position: 3, name: 'SKS'},
  { position: 4, name: 'SKS'},
  { position: 5, name: 'SKS'},
  { position: 6, name: 'SKS'},
  { position: 7, name: 'SKS'},
  { position: 8, name: 'SKS'},
  { position: 9, name: 'SKS'},
 
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // constructor(private dashboardService: DashboardService) { }

  // ngOnInit() {
  //   this.bigChart = this.dashboardService.bigChart();
  //   this.cards = this.dashboardService.cards();
  //   this.pieChart = this.dashboardService.pieChart();

  //   this.dataSource.paginator = this.paginator;
  // }
  
  // public modalRef: BsModalRef;

  // constructor(private modalService: BsModalService) {}

  // OnAddBtn(){
  //   this.modalRef = this.modalService.show(ModalContentComponent);
  //   this.modalRef.content.closeBtnName = 'Close';
  // }

    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(ModalCompComponent);
   }

   ngOnInit(): void {
   }

   onEditButtonClick(data:any) {
    const initialState : any = {
      data:data
    };
    this.modalRef = this.modalService.show(EditAspekComponent, {initialState: initialState})
   }

   onDeleteButtonClick(data:any) {
    const initialState : any = {
      data:data
    };
    this.modalRef = this.modalService.show(HapusAspekComponent, {initialState: initialState})
   }
}



@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
 
  constructor(public modalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}