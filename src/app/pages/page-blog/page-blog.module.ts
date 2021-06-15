import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBlogRoutingModule } from './page-blog-routing.module';
import { PageBlogComponent } from './page-blog.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';
import { PublicationComponent } from 'src/app/components/publication/publication.component';

@NgModule({
  declarations: [PageBlogComponent, FeedComponent, PublicationComponent],
  imports: [CommonModule, PageBlogRoutingModule],
})
export class PageBlogModule {}
