import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './login/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UserListComponent } from './user/user-list.component';
import { RoleListComponent } from './role/role-list.component';
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
import { ForgetPasswordComponent } from './login/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyProfileComponent } from './user/my-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'userlist',
    component: UserListComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'role',
    component: RoleComponent
  },

  {
    path: 'role/:id',
    component: RoleComponent
  },

  {
    path: 'rolelist',
    component: RoleListComponent
  },

  {
    path: 'course',
    component: CourseComponent
  },

  {
    path: 'courselist',
    component: CourseListComponent
  },

  {
    path: 'course/:id',
    component: CourseComponent
  },

  {
    path: 'college',
    component: CollegeComponent
  },


  {
    path: 'collegelist',
    component: CollegeListComponent
  },

  {
    path: 'college/:id',
    component: CollegeComponent
  },

  {
    path: 'student',
    component: StudentComponent
  },

  {
    path: 'studentlist',
    component: StudentListComponent
  },

  {
    path: 'student/:id',
    component: StudentComponent
  },

  {
    path: 'marksheet',
    component: MarksheetComponent
  },

  {
    path: 'marksheetmeritlist',
    component: MarksheetmeritListComponent
  },

  {
    path: 'marksheetlist',
    component: MarksheetListComponent
  },

  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },

  {
    path: 'subject',
    component: SubjectComponent
  },

  {
    path: 'subjectlist',
    component: SubjectListComponent
  },

  {
    path: 'subject/:id',
    component: SubjectComponent
  },


  {
    path: 'timetable',
    component: TimetableComponent
  },

  {
    path: 'timetablelist',
    component: TimetabletListComponent
  },

  {
    path: 'timetable/:id',
    component: TimetableComponent
  },

  {
    path: 'faculty',
    component: FacultyComponent
  },

  {
    path: 'facultylist',
    component: FacultyListComponent
  },

  {
    path: 'faculty/:id',
    component: FacultyComponent
  },

  {
    path: 'report',
    component: ReportComponent
  },

  {
    path: 'reportlist',
    component: ReportListComponent
  },

  {
    path: 'report/:id',
    component: ReportComponent
  },

  {
    path: 'audit',
    component: AuditComponent
  },

  {
    path: 'auditlist',
    component: AuditListComponent
  },

  {
    path: 'audit/:id',
    component: AuditComponent
  },

  {
    path: 'priority',
    component: PriorityComponent
  },
  {
    path: 'prioritylist',
    component: PriorityListComponent
  },
  {
    path: 'priority/:id',
    component: PriorityComponent
  },

  {
    path: 'doctor',
    component: DoctorComponent
  },

  {
    path: 'doctorlist',
    component: DoctorListComponent
  },

  {
    path: 'doctor/:id',
    component: DoctorComponent
  },

  {
    path: 'shopping',
    component: ShoppingComponent
  },

  {
    path: 'shoppinglist',
    component: ShoppingListComponent
  },

  {
    path: 'shopping/:id',
    component: ShoppingComponent
  },

  {
    path: 'accesslog',
    component: AccessLogComponent
  },

  {
    path: 'accessloglist',
    component: AccessLogListComponent
  },

  {
    path: 'accesslog/:id',
    component: AccessLogComponent
  },

  {
    path: 'policy',
    component: PolicyComponent
  },

  {
    path: 'policy/:id',
    component: PolicyComponent
  },

  {
    path: 'marksheetmeri tlist',
    component: MarksheetmeritListComponent
  },

  {
    path: 'jasperReport',
    component: JasperReportComponent
  },

  {
    path: 'investor',
    component: InvestorComponent
  },

 
  {
    path: 'investor/:id',
    component: InvestorComponent
  },



  {
    path: 'loan',
    component: LoanComponent
  },

  

  {
    path: 'loan/:id',
    component: LoanComponent
  },

  {
    path: 'getmarksheet',
    component: GetMarksheetComponent
  },

  {
    path: 'forgotpassword',
    component: ForgetPasswordComponent
  },

  {
    path: 'changePassword',
    component: ChangePasswordComponent
  },

  {
    path: 'myprofile/:id',
    component: MyProfileComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
