import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal-layout/portal/portal.component';
import { FooterComponent } from './portal-layout/footer/footer.component';
import { NavbarComponent } from './portal-layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TransfersComponent } from './transfer-builder/transfers/transfers.component';
import { GroupsComponent } from './group-builder/groups/groups.component';
import { StatisticsComponent } from './statistic-builder/statistics/statistics.component';
import { HttpClientModule } from "@angular/common/http";
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    FooterComponent,
    NavbarComponent,
    TransfersComponent,
    GroupsComponent,
    StatisticsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule {
}
