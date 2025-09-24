import { Component, Input, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle} from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.page.html',
  styleUrls: ['./pdf-viwer.page.scss'],
  imports: [PdfViewerModule, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
})
export class PdfViewerPage  implements OnInit {
  @Input() book: Book = new Book('Teste', '', '../../assets/testepdf2.pdf');
  pdfSrc: string = this.book.pdfUrl;
  pagina: number = this.book.pageNumber || 1;

  constructor() { }

  ngOnInit() {}
}