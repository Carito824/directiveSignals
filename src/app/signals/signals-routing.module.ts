import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterpageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropiertiesPageComponent } from './pages/propierties-page/propierties-page.component';


const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {path: 'counter', component: CounterpageComponent},
      {path: 'user-info', component: UserInfoPageComponent },
      {path: 'propierties', component: PropiertiesPageComponent},
      {path: '**', redirectTo: 'counter'},

    ]





  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
