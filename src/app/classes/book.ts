export class Book {
    id: number;
    title: string;
    coverImageUrl: string;
    pdfUrl: string;
    pageNumber?: number;
    
    constructor(title: string, coverImageUrl: string, pdfUrl: string, id: number = 0) {
        this.id = id;
        this.title = title;
        this.coverImageUrl = coverImageUrl;
        this.pdfUrl = pdfUrl;
    }
}