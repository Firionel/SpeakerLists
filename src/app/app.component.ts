import { Component } from '@angular/core';
import {ModelService} from "./model.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modelService = new ModelService();
  title = 'Races';
}
