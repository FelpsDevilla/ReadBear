import { Component, Input, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.page.html',
  styleUrls: ['./pdf-viwer.page.scss'],
  imports: [PdfViewerModule, IonContent],
})
export class PdfViewerPage  implements OnInit {
  pdfSrc: string = '../../assets/testepdf2.pdf';
  constructor() { }

  ngOnInit() {}

}