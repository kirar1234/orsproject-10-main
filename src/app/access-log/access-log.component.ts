import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.css']
})
export class AccessLogComponent extends BaseCtl {
constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
    super(locator.endpoints.ACCESSLOG,locator,route);

  }

}
