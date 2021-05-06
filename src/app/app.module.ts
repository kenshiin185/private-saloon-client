import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsgpostComponent } from './msgpost/msgpost.component';
import { MsgpostListComponent } from './msgpost-list/msgpost-list.component';
import { MaterialModule } from './material.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MsgpostCreateComponent } from './msgpost-create/msgpost-create.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ConnectUserComponent } from './connect-user/connect-user.component';
import { AddCookieInterceptor } from './add-cookie.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MsgpostComponent,
    MsgpostListComponent,
    ErrorpageComponent,
    MsgpostCreateComponent,
    CreateUserComponent,
    ConnectUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddCookieInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
