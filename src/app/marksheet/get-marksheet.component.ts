import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-marksheet',
  templateUrl: './get-marksheet.component.html',
  styleUrls: ['./get-marksheet.component.css']
})
export class GetMarksheetComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MARKSHEET, locator, route);
  }

  go() {

    let _self = this;

    this.serviceLocator.httpService.get(
      "http://localhost:8080/Marksheet/rollno/" + this.form.data.rollNo,
      function (res: any) {

        if (res.success) {

          _self.form.list = res.result.data;

        } else {

          // CLEAR OLD DATA
          _self.form.list = null;

          _self.form.error = true;
          _self.form.message = res.result.message;

        }
        console.log('list---->', _self.form.list)
      });
  }
}
