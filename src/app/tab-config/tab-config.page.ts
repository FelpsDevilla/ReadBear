import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-config',
  templateUrl: 'tab-config.page.html',
  styleUrls: ['tab-config.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TabConfigPage {
  constructor() {}
}
