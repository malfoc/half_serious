import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './pages/main/main.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
