import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

interface Company {
  name: string;
  web: string;
  desc: string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  myForm?: FormGroup;
  submittedCompanies: Company[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      web: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  addCompany() {
    if (this.myForm!.valid) {
      const companyData = this.myForm!.value as Company;
      this.submittedCompanies.push(companyData);
      this.myForm?.reset();
      Object.keys(this.myForm!.controls).forEach((key) => {
        this.myForm!.controls[key].setErrors(null);
      });
    }
  }

  deleteCompany(index: number) {
    this.submittedCompanies.splice(index, 1);
  }

  openModal() {
    this.dialog.open(ModalComponent, {
      width: '70%',
      height: '80%',
    });
  }
}
