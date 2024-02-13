import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Position {
  name: string;
  level: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-moda',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  myForm?: FormGroup;
  submittedPositions: Position[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  addPosition() {
    if (this.myForm!.valid) {
      const companyData = this.myForm!.value as Position;
      console.log(companyData);
      this.submittedPositions.push(companyData);
      this.myForm?.reset();
      Object.keys(this.myForm!.controls).forEach((key) => {
        this.myForm!.controls[key].setErrors(null);
      });
    }
  }

  deletePosition(index: number) {
    this.submittedPositions.splice(index, 1);
  }
}
