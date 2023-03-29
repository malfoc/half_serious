import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
