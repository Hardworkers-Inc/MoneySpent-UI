import {Component, OnInit} from '@angular/core';
import {Transfer} from "../../models/transfer";
import {TransferType} from "../../models/transferType";
import {TransferService} from "../../services/transfer.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupComponent} from "../../popup/popup.component";

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
    private transferService: TransferService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.transferService.getTransfers()
      .subscribe((transfers: Transfer[]) => {
        this.transfers = transfers
      })
  }

  setDateAndTime(dateAndTime: any): string {
    let date: string[] = [];
    for (let i = 0; i < 5; i++) {
      date.push((dateAndTime[i] < 10 ? '0' : '') + dateAndTime[i])
    }
    return date[0] + '.' + date[2] + '.' + date[1] + ' ' + date[3] + ':' + date[4]
  }

  openDialog(idTransfer: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      question: 'Are you sure you want to remove this transfer?',
      firstButton: 'Cancel',
      secondButton: 'Remove'
    };

    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.transferService.deleteTransfer(idTransfer).subscribe(() => {
          this.loadData();
        });
      }
    });
  }
}
