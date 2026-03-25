import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
    super(locator.endpoints.AUDIT,locator,route);

  }

}
