import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-input-binding',
  templateUrl: './two-way-input-binding.component.html',
  styleUrls: ['./two-way-input-binding.component.css']
})
export class TwoWayInputBindingComponent {
  
  inputValue: string = '';
  submitted: boolean = false;

  handleClick() {
    this.submitted = true;
    this.inputValue = '';
  }

}
