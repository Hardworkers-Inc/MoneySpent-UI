import { Component, OnInit } from '@angular/core';
import { Transfer } from "../../models/transfer";
import { TransferType } from "../../models/transferType";
import { TransferService } from "../../services/transfer.service";

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  transfers: Transfer[] = []
  TransferType = TransferType

  currentSum = "1230.12"
  currency = "hrn"

  constructor(
    private transferService: TransferService
  ) {
  }

  ngOnInit(): void {
    this.transferService.getTransfers()
      .subscribe((transfers: Transfer[]) => {
        this.transfers = transfers
        console.log(this.transfers)
      })
  }

  setDateAndTime(dateAndTime: string): string {
    let dateAndTimeArray = dateAndTime?.split("T")
    let date = dateAndTimeArray[0].split("-")
    return date[2] + '.' + date[1] + '.' + date[0] + ' ' + dateAndTimeArray[1].substr(0, 5)
  }

}
