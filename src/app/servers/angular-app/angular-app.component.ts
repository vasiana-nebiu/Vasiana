import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-app',
  templateUrl: './angular-app.component.html',
  styleUrls: ['./angular-app.component.css']
})
export class AngularAppComponent {
  inputValue: string = '';
  submitted: boolean = false;

  handleClick() {
    this.submitted = true;
    this.inputValue = '';
  }
}

