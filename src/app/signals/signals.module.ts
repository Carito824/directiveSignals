import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterpageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PropiertiesPageComponent } from './pages/propierties-page/propierties-page.component';





@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterpageComponent,
    UserInfoPageComponent,
    PropiertiesPageComponent,
    SideMenuComponent,

  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }

