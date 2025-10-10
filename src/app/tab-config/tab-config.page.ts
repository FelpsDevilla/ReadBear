import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { folder } from 'ionicons/icons';

@Component({
  selector: 'app-config',
  templateUrl: 'tab-config.page.html',
  styleUrls: ['tab-config.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon],
})
export class TabConfigPage {
  constructor(private router: Router) {
     addIcons({ folder });
  }

  OpenPage() {
    this.router.navigate(['/add-folder'])
  }
}