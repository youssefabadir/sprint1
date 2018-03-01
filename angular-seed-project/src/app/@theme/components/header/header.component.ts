import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';
import { User } from '../../../@objects/user';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: User = new User();
  userMenu: any[];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user.username = this.cookie.get('username');
    this.userMenu = [{ title: 'Logout' }];
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuClick(event) {
    if (event.title === 'Logout') {
      this.cookie.remove('username');
      this.router.navigate(['/authentication']);
    }
  }
}
