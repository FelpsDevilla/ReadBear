import { Component, Input, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';
import { FileService } from 'src/app/services/file.service';
import { ActivatedRoute } from '@angular/router';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.page.html',
  styleUrls: ['./pdf-viwer.page.scss'],
  imports: [PdfViewerModule, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
})
export class PdfViewerPage implements OnInit {
  public book!: Book;
  public pagina = 1;
  public pdfSrc: string = '';
  public mostrarBotoes: boolean = false;

  constructor(private route: ActivatedRoute) {}

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
}