import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent extends BaseCtl {
  constructor( locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.INVESTOR, locator, route)
  }
}
