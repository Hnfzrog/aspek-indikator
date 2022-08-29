import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatCheckboxChange, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { ModalCompComponent } from './modal-comp/modal-comp.component';
import { AddDataSatuanComponent } from './add-data-satuan/add-data-satuan.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditDataSatuanComponent } from './edit-data-satuan/edit-data-satuan.component';
import { HapusDataSatuanComponent } from './hapus-data-satuan/hapus-data-satuan.component';
import { EditAspekComponent } from './edit-aspek/edit-aspek.component';
import { HapusAspekComponent } from './hapus-aspek/hapus-aspek.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    ModalCompComponent,
    AddDataSatuanComponent,
    EditDataSatuanComponent,
    HapusDataSatuanComponent,
    EditAspekComponent,
    HapusAspekComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class SharedModule { }
