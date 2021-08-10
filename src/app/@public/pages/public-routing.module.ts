import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
  path:'',
  component: PublicComponent,
  children: [
    {
      path: ``, loadChildren: () =>
        import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: `contact`, loadChildren: () =>
        import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: `aboutp`, loadChildren: () =>
        import('./aboutp/aboutp.module').then(m => m.AboutpModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./forms/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./forms/register/register.module').then(m => m.RegisterModule)
    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
