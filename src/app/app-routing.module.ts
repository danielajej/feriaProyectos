import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


const routes: Routes = [
  { path: 'reactive', loadChildren: () => import('./reactives/reactives.module').then(m => m.ReactivesModule) },

  { path: 'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'reactive' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
