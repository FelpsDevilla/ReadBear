import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class TabLibraryPage {

  constructor() {}

}
