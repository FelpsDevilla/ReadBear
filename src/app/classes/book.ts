export class Book {
    title: string;
    author: string;
    publicationYear: number
    coverImageUrl: string;
    pdfUrl: string;
    
    constructor(title: string, author: string, publicationYear: number, coverImageUrl: string, pdfUrl: string) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.coverImageUrl = coverImageUrl;
        this.pdfUrl = pdfUrl;
    }
}
