import { TestBed } from '@angular/core/testing';

import { TransferService } from './transfer.service';
import { HttpService } from "./http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Transfer } from "../models/transfer";
import { TransferType } from "../models/transferType";
import { of } from "rxjs";

describe('TransferService', () => {
  let transferService: TransferService;
  let httpService: jasmine.SpyObj<HttpService>;

  const path = '/transfers';
  const transfer: Transfer = {
    title: "salary, December",
    description: "Salary for December",
    transferType: TransferType.INCOME,
    dateTime: "2022-03-12T01:45:14",
    count: "12345.67"
  }

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['get', 'post', 'put', 'delete'])
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpService, useValue: spy}
      ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    transferService = TestBed.inject(TransferService);
    httpService = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
  });

  it('should be created', () => {
    expect(transferService).toBeTruthy();
  });

  it('should get all medical codes', () => {
    httpService.get.and.returnValue(of([transfer]));
    transferService.getTransfers().subscribe(() => {
      expect(httpService.get).toHaveBeenCalledWith(path)
    })
  });
});
