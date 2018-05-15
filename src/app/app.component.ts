import { Component } from '@angular/core';
import { ZadatakService } from './zadatak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ZadatakService]
})
export class AppComponent {

  constructor() {}

  public ngOnInit() {}


}
