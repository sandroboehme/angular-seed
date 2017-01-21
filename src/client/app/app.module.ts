import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule.forRoot(), FormsModule],
  declarations: [AppComponent, DataDrivenComponent, TemplateDrivenComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
