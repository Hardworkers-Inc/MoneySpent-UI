import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  question: string | undefined
  firstButton: string | undefined
  secondButton: string | undefined

  constructor(
    private dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.question = data.question;
    this.firstButton = data.firstButton;
    this.secondButton = data.secondButton;
  }

  cancel() {
    this.dialogRef.close(false);
  }

  approve() {
    this.dialogRef.close(true);
  }
}
