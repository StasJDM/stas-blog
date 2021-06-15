import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/page-blog/page-blog.module').then(
        (m) => m.PageBlogModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/page-login/page-login.module').then(
        (m) => m.PageLoginModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/page-profile/page-profile.module').then(
        (m) => m.PageProfileModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
