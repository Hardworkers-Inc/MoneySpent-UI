import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersComponent } from './transfers.component';
import { HttpService } from "../../services/http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TransferService } from "../../services/transfer.service";
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

describe('TransfersComponent', () => {
  let component: TransfersComponent;
  let fixture: ComponentFixture<TransfersComponent>;
  let httpService: jasmine.SpyObj<HttpService>;
  let transferService: jasmine.SpyObj<TransferService>;
  let dialogConfig: jasmine.SpyObj<MatDialogConfig>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpService', ['get', 'delete']);
    const dialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    const mockDialogRef = {
      close: jasmine.createSpy('close')
    };

    await TestBed.configureTestingModule({
      declarations: [TransfersComponent],
      providers: [
        {provide: HttpService, useValue: spy},
        {provide: MatDialog, useValue: dialog},
        {provide: MatDialogRef, useValue: mockDialogRef}
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    dialogConfig = TestBed.inject(MatDialogConfig) as jasmine.SpyObj<MatDialogConfig>
    httpService = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
    transferService = TestBed.inject(TransferService) as jasmine.SpyObj<TransferService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
