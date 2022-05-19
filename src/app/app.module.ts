import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PortalComponent} from './portal-layout/portal/portal.component';
import {FooterComponent} from './portal-layout/footer/footer.component';
import {NavbarComponent} from './portal-layout/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {TransfersComponent} from './transfer-builder/transfers/transfers.component';
import {GroupsComponent} from './group-builder/groups/groups.component';
import {StatisticsComponent} from './statistic-builder/statistics/statistics.component';
import {HttpClientModule} from "@angular/common/http";
import {PopupComponent} from './popup/popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TransferCreateComponent} from "./transfer-builder/transfer-create/transfer-create.component";
import {ExampleHeader} from "./transfer-builder/transfer-create/datepicker-header";
import {ValidationMessageComponent} from './validation-message/validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    FooterComponent,
    NavbarComponent,
    TransfersComponent,
    GroupsComponent,
    StatisticsComponent,
    PopupComponent,
    TransferCreateComponent,
    ExampleHeader,
    ValidationMessageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,

    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule {
}
