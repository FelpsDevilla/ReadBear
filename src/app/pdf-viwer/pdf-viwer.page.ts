import { Component, Input, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.component.html',
  styleUrls: ['./pdf-viwer.component.scss'],
  imports: [PdfViewerModule],
})
export class PdfViwerComponent  implements OnInit {
  @Input() pdfSrc!: string;
  constructor() { }

  ngOnInit() {}

}
