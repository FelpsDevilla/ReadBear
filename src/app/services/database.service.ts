import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
    public db!: SQLiteDBConnection;

    constructor() { }

    async initializeDatabase() {
        try {
            this.db = await this.sqlite.createConnection("readbear_db", false, "no-encryption", 1, false);
            await this.db.open();

            const schema = `
            CREATE TABLE IF NOT EXISTS books 
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                cover_image_url TEXT,
                pdf_url TEXT,
                page_number INTEGER DEFAULT 1
            )

            CREATE TABLE IF NOT EXISTS librarys 
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                path TEXT
            )
            ;`;
            await this.db.execute(schema);

            console.log("Database connection established");
        } catch (error) {
            console.error("Error initializing database:", error);
        }
    }

    async query(sql: string, params: any[] = []): Promise<any> {
        if (!this.db) {
            throw new Error('Database not initialized');
        }

        const result = await this.db.query(sql, params);
        return result.values ?? [];
    }
}