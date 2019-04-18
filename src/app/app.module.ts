import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import { EnrollmentModule } from './enrollment/enrollment.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EnrollmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
