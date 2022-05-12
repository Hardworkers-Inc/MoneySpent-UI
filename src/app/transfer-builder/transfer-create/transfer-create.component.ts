import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TransferType } from "../../models/transferType";
import { TransferService } from "../../services/transfer.service";
import { FormState } from "./form-state";
import { ExampleHeader } from "./datepicker-header";

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

  // time: any

  exampleHeader = ExampleHeader;

  constructor(
    private transferService: TransferService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    // console.log("TransferCreateComponent")
    this.transferForm = this.formBuilder.group({
      title: [new FormState(undefined, this.disabled),
        [Validators.required]],
      description: [new FormState(undefined, this.disabled),
        [Validators.required]],
      transferType: [new FormState(undefined, this.disabled),
        [Validators.required]],
      time: [new FormState(undefined, this.disabled),
        [Validators.required]],
      count: [new FormState(undefined, this.disabled),
        [Validators.required]]
    })
    console.log(this.transferForm.value)
    //
    // this.transferForm.valueChanges.subscribe(ruleValues => {
    //   if (ruleValues.triggerType) {
    //     this.transferForm.patchValue(
    //       {transferType: ruleValues.transferType},
    //       {emitEvent: false}
    //     );
    //   }

    // if (this.transferForm.pristine && !this.isTaskDeleted) {
    //   this.transferForm = ruleValues
    // }
    // this.isChangesMade = !deepEqual(this.originRuleValues, ruleValues)
    // })

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

    console.log(this.transferForm.get('time')?.value)
  }
}
