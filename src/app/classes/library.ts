export class Library {
    id?: number;
    title?: string;
    path?: string;

    constructor(title?: string, path?: string, id?: number) {
        this.id = id;
        this.title = title;
        this.path = path;
    }
}
