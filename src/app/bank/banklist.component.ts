import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent extends BaseListCtl{

constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.BANK,locator,route);
    }

}
