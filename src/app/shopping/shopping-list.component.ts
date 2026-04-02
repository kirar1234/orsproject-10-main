import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  extends BaseListCtl{

   constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
        super(locator.endpoints.SHOPPING,locator,route);
    
      }
}
