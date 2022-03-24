import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMsg: string = '';

  addMember() {
    if (!this.newMemberName) {
      this.errorMsg = 'Please enter a name';
    } else {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
    }
  }

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
}
