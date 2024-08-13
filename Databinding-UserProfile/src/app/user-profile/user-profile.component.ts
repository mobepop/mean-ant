import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  name: string = '';
  email: string= '';
  bio: string = '';
  saveCounter: number = 0;
  buttonStatus: boolean = true;

  reset() {
    this.name = '';
    this.email = '';
    this.bio = '';
    this.updateButton();
  }

  save() {
    console.log('Profile has been saved:', {name: this.name, email: this.email, bio: this.bio});
    this.saveCounter++
  }

  updateButton() {
    this.buttonStatus = !this.name && !this.email && !this.bio;
  }
}
