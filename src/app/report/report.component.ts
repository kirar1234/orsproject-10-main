import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent  extends BaseCtl{

   constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.REPORT,locator,route);
  
    }
  
}
