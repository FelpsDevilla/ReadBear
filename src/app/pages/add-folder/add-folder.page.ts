import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Library } from 'src/app/classes/library';
import { NothingToSeeYetComponent } from 'src/app/components/nothing-to-see-yet/nothing-to-see-yet.component';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.page.html',
  styleUrls: ['./add-folder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, 
    IonHeader, IonButtons, IonItem, IonLabel, IonList, IonButton, NothingToSeeYetComponent]
})
export class AddFolderPage implements OnInit {
  librarys: Library[] = []
  constructor() { }

  ngOnInit() {
  }

  addLibrary() {
    console.log('Adicionar Biblioteca');
  }

}