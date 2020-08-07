import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ProductivityComponent } from './components/productivity/productivity.component';
import { MentalhealthComponent } from './components/mentalhealth/mentalhealth.component';
import { DataComponent } from './components/data/data.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ProducresourcesComponent } from './components/producresources/producresources.component';
import { WellnessresourcesComponent } from './components/wellnessresources/wellnessresources.component';
import { JournalComponent } from './components/journal/journal.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { GoalsComponent } from './components/goals/goals.component';
import { TodoComponent } from './components/todo/todo.component';
import { ApptschedComponent } from './components/apptsched/apptsched.component';
import { EntryhistoryComponent } from './components/entryhistory/entryhistory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { UserdatagraphComponent } from './components/userdatagraph/userdatagraph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ModalComponent } from './components/modal/modal.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    CalendarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponentComponent,
    ProductivityComponent,
    MentalhealthComponent,
    DataComponent,
    SurveyComponent,
    ProfileComponent,
    DataComponent,
    ProducresourcesComponent,
    WellnessresourcesComponent,
    JournalComponent,
    RemindersComponent,
    GoalsComponent,
    TodoComponent,
    ApptschedComponent,
    EntryhistoryComponent,
    UserdatagraphComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HighchartsChartModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
