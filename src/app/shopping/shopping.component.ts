import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.SHOPPING,locator,route);
  
    }
}
