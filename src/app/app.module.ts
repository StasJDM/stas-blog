import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PublicationComponent } from './components/publication/publication.component';
import { FeedComponent } from './components/feed/feed.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormLoginComponent } from './forms/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    PageBlogComponent,
    PageHomeComponent,
    PageProfileComponent,
    PublicationComponent,
    FeedComponent,
    PageLoginComponent,
    FormLoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
