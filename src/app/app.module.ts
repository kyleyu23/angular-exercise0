import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, PageComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
