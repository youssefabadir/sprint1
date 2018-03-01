import { Component, OnInit } from '@angular/core';
import { MemberList } from '../@objects/member-lists';
import { Member } from '../@objects/members';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    members = MemberList;

    selectedMember: Member;

  ngOnInit() {

  }

  onSelect(member:Member):void{
    this.selectedMember= member;
  }
}
