import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent, ModalContentComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule,MatCheckboxModule, MatPaginatorModule, MatTableModule,MatFormFieldModule,MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from 'src/app/shared/modal-comp/modal-comp.component';
import { AddDataSatuanComponent } from 'src/app/shared/add-data-satuan/add-data-satuan.component';
import { EditDataSatuanComponent } from 'src/app/shared/edit-data-satuan/edit-data-satuan.component';
import { HapusDataSatuanComponent } from 'src/app/shared/hapus-data-satuan/hapus-data-satuan.component';
import { EditAspekComponent } from 'src/app/shared/edit-aspek/edit-aspek.component';
import { HapusAspekComponent } from 'src/app/shared/hapus-aspek/hapus-aspek.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticelsComponent } from 'src/app/modules/articels/articels.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ModalContentComponent,
    PostsComponent,
    ArticelsComponent
  ],
  entryComponents: [
    DashboardComponent,
    ModalCompComponent,
    AddDataSatuanComponent,
    EditDataSatuanComponent,
    HapusDataSatuanComponent,
    EditAspekComponent,
    HapusAspekComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    DashboardService,
    BsModalService
  ]
})
export class DefaultModule { }
