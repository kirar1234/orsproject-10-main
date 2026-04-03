import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.BANK,locator,route);
    }
}
