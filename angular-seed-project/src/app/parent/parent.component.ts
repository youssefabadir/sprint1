import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from '../@objects/menu-items';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  menu: NbMenuItem[];

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}
