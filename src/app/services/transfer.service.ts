import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
import { Transfer } from "../models/transfer";

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private readonly _transferPath = '/transfers';

  constructor(private httpService: HttpService) {
  }

  getTransfers(): Observable<Transfer[]> {
    return this.httpService.get<Transfer[]>(this._transferPath);
  }

  deleteTransfer(id: any): Observable<any> {
    return this.httpService.delete(`${this._transferPath}/${id}`);
  }
}
