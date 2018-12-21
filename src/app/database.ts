
import PouchDB from 'pouchdb';
import { NullInjector } from '@angular/core/src/di/injector';

export abstract class Database {

  /** */
  private static ERROR_DATA_NOT_FOUND = 'not_found';

  /**
   *
   */
  private database: PouchDB;
  private remoteDatabase: PouchDB;

  /**
   *
   */
  constructor(name: string) {
      this.initDatabase(name);
      this.database.info().then( (info: any) => {
          console.log(info);
         // this.getFromDatabase('1');
      });
  }

  /**
   *
   */
  public initDatabase(name: string) {
      this.database = new PouchDB(name);
      this.remoteDatabase = new PouchDB('http://localhost:5984/' + name);

      // Enable live bidirectional replication.
      this.database.sync(this.remoteDatabase, {
        live: true
      }).on('complete', function () {
        console.log('Replication enabled');
        // yay, we're in sync!
      }).on('error', function (error) {
        console.log('Error on replication :');
        console.log(error);
        // boo, we hit an error!
      });
  }

  /**
   *
   */
  public putIntoDatabase(document: any) {
    this.database.put(document).catch( (error) => {
        // error
      throw error;
    }).then( () => {
      return true;
    }).catch( (error) => {
        return false;
      // oh noes! we got an error
      throw error;
    });
  }

  /**
   *
   * @param document
   */
  public DeleteDatabase(document: any) {
    this.database.remove(document).catch( (error) => {
          // error
        throw error;
    }).then( () => {
        return true;
    }).catch( (error) => {
        return false;
      // oh noes! we got an error
      throw error;
    });
  }

  /**
   *
   * @param id
   */
  public getFromDatabase(id: string) {
    this.database.get(id).catch( (error) => {
      if (Database.ERROR_DATA_NOT_FOUND === error.name) {
        console.log('not found');
        // not found
      } else {
        // other error
        throw error;
      }
    }).then( (document: any) => {
        console.log(document);
        return document;
    }).catch( (error) => {
      // handle any errors whitin the then.
      throw error;
    });
  }

  /**
   *
   * @param updatedDocument
   */
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
