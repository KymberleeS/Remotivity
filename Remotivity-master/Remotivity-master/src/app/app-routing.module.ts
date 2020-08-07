import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
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
import { ProfileComponent } from './components/profile/profile.component';
import { UserdatagraphComponent } from './components/userdatagraph/userdatagraph.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'test', component: CalendarComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'productivity', component: ProductivityComponent },
  { path: 'wellness', component: MentalhealthComponent},
  { path: 'data', component: DataComponent},
  { path: 'survey', component: SurveyComponent},
  { path: 'productivityresources', component: ProducresourcesComponent},
  { path: 'wellnessresources', component: WellnessresourcesComponent},
  { path: 'journal', component: JournalComponent},
  { path: 'reminders', component: RemindersComponent},
  { path: 'goals', component: GoalsComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'appointments', component: ApptschedComponent},
  { path: 'entryhistory', component: EntryhistoryComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'userdata', component: UserdatagraphComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
