import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is My Life Now';
  pizzaCat = 'https://i.pinimg.com/736x/59/74/a8/5974a849873f241c69819d199bace861--funny-shit-funny-pics.jpg'
}
