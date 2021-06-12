import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProfileComponent } from './page-profile.component';

const routes: Routes = [{ path: '', component: PageProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageProfileRoutingModule {}
