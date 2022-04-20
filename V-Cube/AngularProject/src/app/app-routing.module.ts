import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { TestingClassComponent } from './testing-class/testing-class.component';
import { ParentchildinteractionsComponent } from './component-interactions/parentchildinteractions/parentchildinteractions.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { ServernotfoundComponent } from './notfound/servernotfound/servernotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails/userdetails.component';
import { TvComponent } from './tv/tv.component';
import { AcComponent } from './ac/ac.component';
import { LocationComponent } from './loation/location/location.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { UserguardGuard } from './userguard.guard';
import { HomechildGuard } from './homechild.guard';
import { FormsComponent } from './forms/forms/forms.component';
import { AccessComponent } from './acces-denined/access/access.component';

const routes: Routes =[ {
                          path:'',
                          redirectTo:'/home',
                          pathMatch:'full'
                        },
                        {
                          path:'home',
                          component:HomeComponent,
                          canActivateChild:[HomechildGuard],
                          children:[
                            {
                              path:'tv',
                              component:TvComponent
                            },
                            {
                              path:'ac',
                              component:AcComponent
                            }
                          ]
                        },
                        {
                          path:'user',
                          component:UserComponent,
                          canActivate:[UserguardGuard]
                        },
                        {
                          path:'aboutus',
                          component:AboutusComponent,
                          children:[
                            {
                              path:'location',
                              outlet:'Location',
                              component:LocationComponent
                            },
                            {
                              path:'feedback',
                              outlet:'Feedback',
                              component:FeedbackComponent
                            }
                          ]
                        },
                        {
                          path:'testing',
                          component : TestingClassComponent
                        },
                        {
                          path:'denied',
                          component:AccessComponent
                        },
                        {
                          path:'userdetails/:id',
                          component : UserdetailsComponent
                        },{
                          path:'forms',
                          component:FormsComponent
                        },
                          { path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },
                        {
                          path:'**',
                          component:ServernotfoundComponent
                        }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
