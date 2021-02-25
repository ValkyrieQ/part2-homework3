import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [AppComponent, ConfigComponent],
  imports: [BrowserModule, TreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
