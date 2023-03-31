import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContainerComponent,
    LoadingComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContainerComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
