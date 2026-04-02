import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css']
})
export class PriorityListComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
        super(locator.endpoints.PRIORITY,locator,route);
    
      }
}
