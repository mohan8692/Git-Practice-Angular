import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { TestingClassComponent } from './testing-class/testing-class.component';
import { ParentchildinteractionsComponent } from './component-interactions/parentchildinteractions/parentchildinteractions.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';

const routes: Routes =[ {
                          path:'',
                          component:HomeComponent
                        },
                        {
                          path:'home',
                          component:HomeComponent 
                        },
                        {
                          path:'user',
                          component:UserComponent
                        },
                        {
                          path:'aboutus',
                          component:AboutusComponent
                        },
                        {
                          path:'testing',
                          component : TestingClassComponent
                        }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
