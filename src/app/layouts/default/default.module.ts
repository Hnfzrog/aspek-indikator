import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent, ModalContentComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from 'src/app/shared/modal-comp/modal-comp.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ModalContentComponent,
    PostsComponent
  ],
  entryComponents: [
    DashboardComponent,
    ModalCompComponent
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
    ModalModule.forRoot()
  ],
  providers: [
    DashboardService,
    BsModalService
  ]
})
export class DefaultModule { }
