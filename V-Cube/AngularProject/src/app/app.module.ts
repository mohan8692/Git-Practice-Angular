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
import { ServernotfoundComponent } from './notfound/servernotfound/servernotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails/userdetails.component';
import { TvComponent } from './tv/tv.component';
import { AcComponent } from './ac/ac.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LocationComponent } from './loation/location/location.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms/forms.component';
import { AccessComponent } from './acces-denined/access/access.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './interseptors/headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestingClassComponent,
    TestingClassDirective,
    FilterPipe,
    ParentchildinteractionsComponent,
    UserComponent,
    HomeComponent,
    AboutusComponent,
    ServernotfoundComponent,
    UserdetailsComponent,
    TvComponent,
    AcComponent,
    LocationComponent,
    FeedbackComponent,
    FormsComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:LocationStrategy , useClass : HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
