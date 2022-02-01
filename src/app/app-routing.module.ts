import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DesktopGuard } from './guards/desktopGuard/desktop.guard';
import { MobileGuard } from './guards/mobile/mobile.guard';
import { HomeLayoutComponent } from './modules/home/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo:'/home'
      },
      {
        path: 'home',
        canActivate: [DesktopGuard],
        loadChildren: () => import ('src/app/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'homeMobile',
        canActivate: [MobileGuard],
        loadChildren: () => import ('src/app/modules/home-mobile/home-mobile.module').then(m => m.HomeMobileModule)
      },
      {
        path: 'aboutMe',
        canActivate: [DesktopGuard],
        loadChildren: () => import ('src/app/modules/about-me/about-me.module').then(m => m.AboutMeModule)
      },
      // {
      //   path: 'homeMobile',
      //   canActivate: [MobileGuard],
      //   loadChildren: () => import ('src/app/modules/home-mobile/home-mobile.module').then(m => m.HomeMobileModule)
      // },
      {
        path: 'projects',
        canActivate: [DesktopGuard],
        loadChildren: () => import ('src/app/modules/projects/projects.module').then(m => m.ProjectsModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
