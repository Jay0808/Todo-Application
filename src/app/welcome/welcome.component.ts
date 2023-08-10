import { Component } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeMessage: string = '';

  constructor(
    private service: WelcomeDataService
    ) { }

  getWelcomeMessage() {

    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService();
    // Replace 'YOUR_API_ENDPOINT_URL' with the actual API endpoint URL
    // this.http.get<any>('YOUR_API_ENDPOINT_URL').subscribe(
    //   response => {
    //     this.welcomeMessage = response.message;
    //   },
    //   error => {
    //     console.error('Error fetching welcome message:', error);
    //   }
    // );
  }

  handleSucessfulResponse(response: any){
    console.log(response)
  }
}
