import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  errorMessage: string;

  constructor() {
    this.errorMessage = 'An error occurred please contact our service desk'; // Set an appropriate error message here
  }
}
