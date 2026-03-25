import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor() { }

  public SERVER_URL = "http://localhost:8080";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public REPORT = this.SERVER_URL + "/Report";
  public AUDIT = this.SERVER_URL + "/Audit";
  public PRIORITY = this.SERVER_URL + "/Priority";
  public DOCTOR = this.SERVER_URL + "/Doctor";
  public SHOPPING = this.SERVER_URL + "/Shopping";
  public ACCESSLOG = this.SERVER_URL + "/Accesslog";
  public CONFIGURATION = this.SERVER_URL + "/Configuration";
  public BROADCAST = this.SERVER_URL + "/Broadcast";
  public VISITOR = this.SERVER_URL + "/Visitor";
  public POLICY = this.SERVER_URL + "/Policy";
  public JASPERREPORT = this.SERVER_URL + "/Jasper";
  public INVESTOR = this.SERVER_URL + "/Investor";
  public LOAN = this.SERVER_URL + "/Loan";







}
