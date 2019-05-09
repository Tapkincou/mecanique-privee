import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss']
})

@NgModule({
  imports: [
    FormsModule,
    FormGroup,
    FormControl
  ],
  declarations: [
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class CustomerEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:  new FormControl(''),
    phoneNumber:  new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<CustomerEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn('onSubmit');
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
