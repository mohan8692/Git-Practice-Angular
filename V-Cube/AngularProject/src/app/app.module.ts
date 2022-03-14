import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingClassComponent } from './testing-class/testing-class.component';
import { TestingClassDirective } from './testing-class/testing-class.directive';
import { FilterPipe } from './testing-class/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestingClassComponent,
    TestingClassDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
