import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Book } from '../classes/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private db: DatabaseService) { }

    async getBooks(): Promise<Book[]> {
        const query = 'SELECT * FROM books';

        const result = await this.db.query(query);
        const typedResult: BookRow[] = result as BookRow[];

        return typedResult.map((row: BookRow) => new Book(
            row.title,
            row.cover_image_url,
            row.pdf_url,
            row.page_number,
            row.id,
        ));
    }

    async addBook(book: Book): Promise<void> {
        const query = 'INSERT INTO books (title, cover_image_url, pdf_url) VALUES (?, ?, ?)';
        const params = [book.title, book.coverImageUrl, book.pdfUrl];

        await this.db.query(query, params);
    }

    async deleteBook(id: number): Promise<void> {
        const query = 'DELETE FROM books WHERE id = ?';
        const params = [id];

        await this.db.query(query, params);
    }

    async updateBook(book: Book): Promise<void> {
        const query = 'UPDATE books SET title = ?, cover_image_url = ?, pdf_url = ? WHERE id = ?';
        const params = [book.title, book.coverImageUrl, book.pdfUrl, book.id];

        await this.db.query(query, params);
    }

    async getBookById(id: number): Promise<Book | null> {
        const query = 'SELECT * FROM books WHERE id = ?';
        const params = [id];

        const result = await this.db.query(query, params);
        const typedResult: BookRow[] = result as BookRow[];

        if (typedResult.length === 0) {
            return null;
        }

        const row = typedResult[0];
        return new Book(row.title, row.cover_image_url, row.pdf_url, row.id);
    }

    async updatePageNumber(id: number, pageNumber: number): Promise<void> {
        const query = 'UPDATE books SET page_number = ? WHERE id = ?';
        const params = [pageNumber, id];

        await this.db.query(query, params);
    }
}

interface BookRow {
    id: number;
    title: string;
    cover_image_url: string;
    pdf_url: string;
    page_number?: number;
}