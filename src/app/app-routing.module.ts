import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TransfersComponent } from "./transfer-builder/transfers/transfers.component";
import { GroupsComponent } from "./group-builder/groups/groups.component";
import { StatisticsComponent } from "./statistic-builder/statistics/statistics.component";
import { TransferCreateComponent } from "./transfer-builder/transfer-create/transfer-create.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/my-wallet',
    pathMatch: 'full'
  },
  {
    path: 'my-wallet',
    component: TransfersComponent,
  },
  {
    path: 'my-wallet/create',
    component: TransferCreateComponent
  },
  {
    path: 'my-groups',
    component: GroupsComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
