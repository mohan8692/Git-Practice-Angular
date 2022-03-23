import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingClassComponent } from './testing-class/testing-class.component';
import { TestingClassDirective } from './testing-class/testing-class.directive';
import { FilterPipe } from './testing-class/pipes/filter.pipe';
import { ParentchildinteractionsComponent } from './component-interactions/parentchildinteractions/parentchildinteractions.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingClassComponent,
    TestingClassDirective,
    FilterPipe,
    ParentchildinteractionsComponent,
    UserComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
