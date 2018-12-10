import { PouchDB } from 'pouchdb';
import { Element } from '@angular/compiler';
export abstract class Database {

    constructor(name: string) {
        this.initDatabase(name);
        this.database.info().then( (info: any) => {
            console.log(info);
        });
    }
    private database: PouchDB;

    public initDatabase(name: string) {
        this.database = new PouchDB(name);
    }

    public putIntoDatabase(document: any ) {
        this.database.put(document);
    }

    public getFromDatabase(id: string) {
        this.database.get(id).then(function (document: any) {
            return document;
          });
    }

    public updateFromDatabase(updatedDocument: any) {
        // fetch mittens
        this.database.get(updatedDocument.id).then( (document: any) => {
            // update their age
            document = updatedDocument;
            // put them back
            return this.database.put(document);
        }).then( (document: any) => {
            // fetch id again
            return this.database.db.get(document.id);
        }).then( (document: any) => {
            console.log(document);
        });

    }

}
