import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PageBlogComponent } from './page-blog.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';
import { PublicationComponent } from 'src/app/components/publication/publication.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsDataServiceService } from 'src/app/services/publications-data-service.service';

@NgModule({
  declarations: [PageBlogComponent, FeedComponent, PublicationComponent],
  imports: [CommonModule, PageBlogRoutingModule, HttpClientModule],
  providers: [PublicationsDataServiceService],
})
export class PageBlogModule {}
