import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent  extends BaseCtl{

   constructor(public locator: ServiceLocatorService,route: ActivatedRoute){
      super(locator.endpoints.PRIORITY,locator,route);
  
    }
}
