import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TransferType} from "../../models/transferType";
import {TransferService} from "../../services/transfer.service";
import {FormState} from "./form-state";
import {ExampleHeader} from "./datepicker-header";
import {Transfer} from "../../models/transfer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transfer-create',
  templateUrl: './transfer-create.component.html',
  styleUrls: ['./transfer-create.component.scss']
})

export class TransferCreateComponent implements OnInit {
  currentSum = "1230.12"
  currency = "hrn"

  disabled = false
  TransferType = TransferType
  transferForm!: FormGroup
  firstButtonPress = true;
  secondButtonPress = false;
  exampleHeader = ExampleHeader;

  constructor(
    private transferService: TransferService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      title: [new FormState("", this.disabled),
        [Validators.required, this.noWhitespaceValidator, Validators.maxLength(50)]],
      description: [new FormState(undefined, this.disabled),
        [Validators.maxLength(300)]],
      transferType: [new FormState(TransferType.INCOME, this.disabled),
        [Validators.required, this.noWhitespaceValidator]],
      time: [new FormState(undefined, this.disabled),
        [Validators.required, this.noWhitespaceValidator]],
      count: [new FormState("", this.disabled),
        [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]?)?$')]]
    })
  }

  get title(): FormControl {
    return this.transferForm.get("title") as FormControl
  }

  get description(): FormControl {
    return this.transferForm.get("description") as FormControl
  }

  get transferType(): FormControl {
    return this.transferForm.get("transferType") as FormControl
  }

  get tags(): FormControl {
    return this.transferForm.get("tags") as FormControl
  }

  get dateTime(): FormControl {
    return this.transferForm.get("time") as FormControl
  }

  get count(): FormControl {
    return this.transferForm.get("count") as FormControl
  }

  refactor(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase()
  }

  clickFirstButton() {
    this.firstButtonPress = true;
    this.secondButtonPress = false;
  }

  clickSecondButton() {
    this.firstButtonPress = false;
    this.secondButtonPress = true;
  }

  onClickSave() {
    let newTransfer = this.generateTransfer()
    this.transferService.addTransfer(newTransfer).subscribe(() => {
      this.router.navigate(['../'], {relativeTo: this.route})
    })
    console.log(newTransfer)
  }

  generateTransfer(): Transfer {
    return {
      title: this.title?.value,
      description: this.description?.value,
      transferType: this.transferType?.value,
      tags: [],
      dateTime: this.dateTime.value,
      count: this.count.value
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

  onNowClick() {
    let now = new Date();
    let result = now.getFullYear() + '-'
      + TransferCreateComponent.formatDecimal(now.getMonth() + 1) + '-'
      + TransferCreateComponent.formatDecimal(now.getDate()) + 'T'
      + TransferCreateComponent.formatDecimal(now.getHours()) + ':'
      + TransferCreateComponent.formatDecimal(now.getMinutes())
    this.dateTime.patchValue(result)
  }

  getErroredFieldClass(formControl: FormControl): string {
    return this.isFieldErrored(formControl) ? "data-input-invalid" : ''
  }

  isFieldErrored(formControl: FormControl): boolean {
    return formControl.invalid && formControl.touched
  }

  private static formatDecimal(value: number): string {
    return (value > 10 ? '' : '0') + value
  }
}
