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

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    FooterComponent,
    NavbarComponent,
    TransfersComponent,
    GroupsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
