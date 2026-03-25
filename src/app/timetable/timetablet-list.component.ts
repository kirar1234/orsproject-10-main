import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timetablet-list',
  templateUrl: './timetablet-list.component.html',
  styleUrls: ['./timetablet-list.component.css']
})
export class TimetabletListComponent extends BaseListCtl{
constructor(locator:ServiceLocatorService,route:ActivatedRoute){
super(locator.endpoints.TIMETABLE,locator,route);
}
}
