import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-log-list',
  templateUrl: './access-log-list.component.html',
  styleUrls: ['./access-log-list.component.css']
})
export class AccessLogListComponent  extends BaseListCtl{

  constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.ACCESSLOG,locator,route);
  
    }
}
