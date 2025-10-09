import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Library } from '../classes/library';

@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    constructor(private db: DatabaseService) { }

    async getLibraries(): Promise<Library[]> {
        const query = 'SELECT * FROM librarys';

        const result = await this.db.query(query);
        const typedResult: LibraryRow[] = result as LibraryRow[];

        return typedResult.map((row: LibraryRow) => new Library(
            row.title,
            row.path,
            row.id,
        ));
    }

    async addLibrary(library: Library): Promise<void> {
        const query = 'INSERT INTO librarys (title, path) VALUES (?, ?)';
        const params = [library.title, library.path];

        await this.db.query(query, params);
    }

    async deleteLibrary(id: number): Promise<void> {
        const query = 'DELETE FROM librarys WHERE id = ?';
        const params = [id];

        await this.db.query(query, params);
    }

    async updateLibrary(library: Library): Promise<void> {
        const query = 'UPDATE librarys SET title = ?, path = ? WHERE id = ?';
        const params = [library.title, library.path, library.id];

        await this.db.query(query, params);
    }

    async getLibraryById(id: number): Promise<Library | null> {
        const query = 'SELECT * FROM librarys WHERE id = ?';
        const params = [id];
        const result = await this.db.query(query, params);
        const typedResult: LibraryRow[] = result as LibraryRow[];

        if (typedResult.length === 0) {
            return null;
        }

        const row = typedResult[0];
        return new Library(row.title, row.path, row.id);
    }
}

interface LibraryRow {
    id: number;
    title: string;
    path: string;
}