import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, OperatorFunction, PartialObserver } from 'rxjs';

@Component({
  selector: 'app-edit-data-satuan',
  templateUrl: './edit-data-satuan.component.html',
  styleUrls: ['./edit-data-satuan.component.scss']
})
export class EditDataSatuanComponent implements OnInit {

  formGroupX: FormGroup;
  data: any;
  formStatus: 'create' | 'update';

  constructor(
    private modalRef : BsModalRef,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    this.formStatus = (this.data) ? 'update' : 'create'  ;
    this.doInitForm();
  }

  doInitForm() {
    this.formGroupX = this.formBuilder.group({
      name: [this.data.name || '', [Validators.required]],
      weight: [this.data.weight || 'Kualitas']
    });
  }

  onSubmitClick() {
    const formData = new FormData();
    const formValue: Array<any> = this.formGroupX.value;

    console.log('form value', formValue);
    
    formData.append('name', formValue['name']);
    formData.append('weight', formValue['weight']);

    if (this.formStatus === 'create') {
      // this.http.post('sdsd', formData);
    } else {
      this.handleRequest(formValue).subscribe((response: PartialObserver<any>) => {
        console.log('response', response);
      this.modalRef.hide();
      });
    }
    // modalRef.hide();
  }

  handleRequest(formData: any): Observable<any> {
    return this.http.put('sdsd', formData);
  }
}
