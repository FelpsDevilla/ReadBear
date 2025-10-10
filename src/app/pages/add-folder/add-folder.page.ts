import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Library } from 'src/app/classes/library';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.page.html',
  styleUrls: ['./add-folder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonHeader, IonButtons, IonItem, IonLabel, IonList, IonButton]
})
export class AddFolderPage implements OnInit {
  librarys: Library[] = [
    { title: 'ReadBear', id: 1},
    { title: 'Pocket', id: 1},
    { title: 'Instapaper', id: 1}
  ]
  constructor() { }

  ngOnInit() {
  }

}