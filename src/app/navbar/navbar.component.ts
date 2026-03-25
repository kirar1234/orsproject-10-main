import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  endpoint = "http://localhost:8080/Auth/";

  form: any = {
    data: {}
  }

  constructor(private transalte: TranslateService, private httpservice: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {
    const locale = localStorage.getItem("locale") || 'en';
    transalte.setDefaultLang(locale);
    transalte.use(locale);
  }

  changeLocale(locale: string) {
    localStorage.setItem("locale", locale);
    this.transalte.use(locale);
  }

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != null && check != null) {
      this.form.data.fname = localStorage.getItem('fname');
      this.form.data.role = localStorage.getItem('role');
      return true;
    } else {
      return false;
    }
  }

  goToLink() {
    window.open('assets/doc/index.html', '_blank');
  }

  logout() {
    var _self = this;
    this.httpservice.get(this.endpoint + 'logout', function (res: any) {
      localStorage.clear();
      _self.router.navigateByUrl('login')
    });
  }

  forward() {
    this.form.data.userId = localStorage.getItem("userId");
    this.servicelocator.forward("/myprofile/" + this.form.data.userId);
  }

}
