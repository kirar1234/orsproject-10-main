import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.css']
})
export class InvestorListComponent extends BaseListCtl {

  constructor( locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.INVESTOR, locator, route)
    }
}
