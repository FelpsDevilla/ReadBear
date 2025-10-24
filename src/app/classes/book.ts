export class Book {
    id: number;
    title: string;
    pdfUrl: string;
    pageNumber?: number;
    
    constructor(title: string, pdfUrl: string, pageNumber: number = 1 ,id: number = 0) {
        this.id = id;
        this.title = title;
        this.pdfUrl = pdfUrl;
        this.pageNumber = pageNumber;
    }

    toJSON() {
        return {
            title: this.title,
            pdfUrl: this.pdfUrl,
            pageNumber: this.pageNumber
        };
    }
}