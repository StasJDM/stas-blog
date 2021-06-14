import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { FormLoginComponent } from 'src/app/forms/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/common/button/button.component';

@NgModule({
  declarations: [PageLoginComponent, FormLoginComponent, ButtonComponent],
  imports: [CommonModule, PageLoginRoutingModule, ReactiveFormsModule],
})
export class PageLoginModule {}
