import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    PageBlogComponent,
    PageHomeComponent,
    PageProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
