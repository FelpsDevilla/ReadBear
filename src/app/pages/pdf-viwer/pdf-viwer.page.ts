import { Component, Input, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFooter, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';
import { ActivatedRoute } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { arrowForward, arrowBack, addCircle, removeCircle} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.page.html',
  styleUrls: ['./pdf-viwer.page.scss'],
  imports: [IonIcon, IonButton, IonFooter, PdfViewerModule, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
})
export class PdfViewerPage implements OnInit {
  public book!: Book;
  public pagina = 1;
  public pdfSrc: string = '';
  public zoom = 1.0; // nível inicial de zoom
  public mostrarBotoes: boolean = false;

  constructor(private route: ActivatedRoute) {
    addIcons({ arrowForward, arrowBack, addCircle, removeCircle })
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.book = JSON.parse(params['book']);
      // metodo para converter file URI para webPath
      // o angular pdf viewer precisa de um webPath
      const webPath = Capacitor.convertFileSrc(this.book.pdfUrl);
      this.pdfSrc = webPath;
      console.log(this.pdfSrc);
    });
  }

  zoomIn() {
    this.zoom += 0.25; // aumenta 25%
  }

  zoomOut() {
    if (this.zoom > 0.5) this.zoom -= 0.25; // evita zoom negativo
  }

  Alterar() {
    this.mostrarBotoes = !this.mostrarBotoes;
  }
}