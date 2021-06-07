import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'blog', component: PageBlogComponent },
  { path: 'profile', component: PageProfileComponent },
  { path: '**', component: PageHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
