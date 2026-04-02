import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './login/sign-up.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { FormsModule } from '@angular/forms';
import { HttpServiceService } from './http-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { EndpointService } from './endpoint.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserListComponent } from './user/user-list.component';
import { RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SubjectComponent } from './subject/subject.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetabletListComponent } from './timetable/timetablet-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report/report-list.component';
import { AuditComponent } from './audit/audit.component';
import { AuditListComponent } from './audit/audit-list.component';
import { PriorityComponent } from './priority/priority.component';
import { PriorityListComponent } from './priority/priority-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor/doctor-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { AccessLogListComponent } from './AccessLog/access-log-list.component';
import { PolicyComponent } from './policy/policy.component';
import { MarksheetmeritListComponent } from './marksheet/marksheetmerit-list.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';
import { InvestorComponent } from './investor/investor.component';
import { LoanComponent } from './loan/loan.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { AuthService } from './auth.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyProfileComponent } from './user/my-profile.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    UserComponent,
    RoleComponent,
    UserListComponent,
    RoleListComponent,
    TimetableComponent,
    SubjectComponent,
    CollegeComponent,
    StudentComponent,
    CourseComponent,
    FacultyComponent,
    MarksheetComponent,
    CollegeListComponent,
    StudentListComponent,
    MarksheetListComponent,
    CourseListComponent,
    SubjectListComponent,
    TimetabletListComponent,
    FacultyListComponent,
    ReportComponent,
    ReportListComponent,
    AuditComponent,
    AuditListComponent,
    PriorityComponent,
    PriorityListComponent,
    DoctorComponent,
    DoctorListComponent,
    ShoppingComponent,
    ShoppingListComponent,
    AccessLogComponent,
    AccessLogListComponent,
    PolicyComponent,
    MarksheetmeritListComponent,
    JasperReportComponent,
    InvestorComponent,
    LoanComponent,
    GetMarksheetComponent,
    ChangePasswordComponent,
    MyProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

      }
    }),
  ],
  providers: [
    HttpServiceService,
    ServiceLocatorService,
    EndpointService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
