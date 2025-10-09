export class Book {
    id: number;
    title: string;
    coverImageUrl: string;
    pdfUrl: string;
    pageNumber?: number;
    
    constructor(title: string, coverImageUrl: string, pdfUrl: string, pageNumber: number = 1 ,id: number = 0) {
        this.id = id;
        this.title = title;
        this.coverImageUrl = coverImageUrl;
        this.pdfUrl = pdfUrl;
        this.pageNumber = pageNumber;
    }
}