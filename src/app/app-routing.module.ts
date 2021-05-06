import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectUserComponent } from './connect-user/connect-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MsgpostCreateComponent } from './msgpost-create/msgpost-create.component';
import { MsgpostListComponent } from './msgpost-list/msgpost-list.component';
import { MsgpostComponent } from './msgpost/msgpost.component';


const routes: Routes = [
  {path:'', component: ConnectUserComponent},
  {path:'salon/:id', component: MsgpostListComponent},
  {path:'msg-posts/:id', component:MsgpostComponent},
  {path:'create-user', component: CreateUserComponent},
  {path:'post', component:MsgpostCreateComponent},
  {path:'auth', component: ConnectUserComponent},
  {path:'**',component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
