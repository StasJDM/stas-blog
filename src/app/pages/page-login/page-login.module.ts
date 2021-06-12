import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { FormLoginComponent } from 'src/app/forms/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageLoginComponent, FormLoginComponent],
  imports: [CommonModule, PageLoginRoutingModule, ReactiveFormsModule],
})
export class PageLoginModule {}
