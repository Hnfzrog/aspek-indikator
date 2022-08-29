import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddDataSatuanComponent } from 'src/app/shared/add-data-satuan/add-data-satuan.component';
import { EditDataSatuanComponent } from 'src/app/shared/edit-data-satuan/edit-data-satuan.component';
import { HapusDataSatuanComponent } from 'src/app/shared/hapus-data-satuan/hapus-data-satuan.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SKS', weight: 'Kuantitas' },
  {position: 2, name: 'Mahasiswa', weight: 'Kuantitas' },
  {position: 3, name: 'Kegiatan', weight: 'Kuantitas' },
  {position: 4, name: 'Tim', weight: 'Kuantitas' },
  {position: 5, name: 'Bahan Ajar', weight: 'Kuantitas' },
  {position: 6, name: 'Karya', weight: 'Kuantitas' },
  {position: 7, name: 'Dosen', weight: 'Kuantitas' },
  {position: 8, name: 'Artikel', weight: 'Kuantitas' },
  {position: 9, name: 'Laporan', weight: 'Kuantitas' },
  {position: 10, name: 'Buku', weight: 'Kuantitas' },
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService ) { }

  openModal(template:TemplateRef<any>){
    // const initialState: any = {
    //   data: null,
    // };
    // this.modalRef = this.modalService.show(AddDataSatuanComponent, { initialState: initialState});
    this.modalRef = this.modalService.show(AddDataSatuanComponent);
  }

  ngOnInit():void {
  }

  onEditButtonClick(data: any): void {
    const initialState: any = {
      data: data,
    };
    this.modalRef = this.modalService.show(EditDataSatuanComponent, { initialState: initialState});
  }

  onDeleteButtonClick(data: any): void {
    const initialState: any = {
      data: data,
    };
    this.modalRef = this.modalService.show(HapusDataSatuanComponent, { initialState: initialState});
  }

}