import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent extends BaseListCtl {


    constructor( public locator:ServiceLocatorService,route:ActivatedRoute){
  
  
      super(locator.endpoints.AUDIT,locator,route);
}
}
