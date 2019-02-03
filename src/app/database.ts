
import PouchDB from 'pouchdb';

export abstract class Database {

  /** */
  private static ERROR_DATA_NOT_FOUND = 'not_found';

  /**
   * The local database.
   */
  private database: PouchDB;

  /**
   * The remote database (sync with the local database).
   */
  private remoteDatabase: PouchDB;

  /**
   *
   */
  private databaseName: string;
  public allDocs: any;

  constructor(name: string) {
    this.allDocs = null;
    this.databaseName = name;
    this.initDatabase();
  }

/**
 * Initialize the database.
 * @param name Database name
 */
  public initDatabase() {
      console.log('init database ' + this.databaseName);
      this.database = new PouchDB(this.databaseName);
      this.remoteDatabase = new PouchDB('http://localhost:5984/' + this.databaseName);
      // Enable live bidirectional replication.
      this.database.sync(this.remoteDatabase, {
        live: true
      }).on('complete', function () {

        console.log('Replication enabled');

        this.database.info().then( (info: any) => {
          console.log(info);
          }).catch((error) => {
            console.log('Error on getInfo :');
            console.log(error);
            throw(error);
            // yay, we're in sync!
      }).on('error', function (error) {
        console.log('Error on replication :');
        console.log(error);
        throw(error);
        // boo, we hit an error!
      });
    });

  }

  /**
   * Put a new document into database.
   * @return Boolean
   */
  public putDocument(document: any) {
    this.database.put(document).catch( (error) => {
      // error
      console.log('error dans putDocument ' + error);
      throw error;
    }).then( () => {
      console.log('putDocument OK');
      return true;
    }).catch( (error) => {
        console.log('error dans a la fin de putDocument ' + error);
        return false;
      // oh noes! we got an error
      throw error;
    });
  }

  /**
   * Remove a document from database.
   * @param document Document to remove.
   * @return boolean
   */
  public deleteDocument(document: any) {
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
  * Get all documents from database.
  * @return Array of documents
  */
  public getAllDocuments(): Promise<any> {
    return this.database.allDocs({ include_docs: true }); /*.then( (result) => {
        const documents = new Array<Object>();
        console.log('dans la classe database ::');
        console.log(result.rows);
        this.allDocs = result.rows;
        // return Promise.all(result.rows); // Promise.all
       // return (result.rows);
    }).catch( (error) => {
      if (Database.ERROR_DATA_NOT_FOUND === error.name) {
        console.log('not found');
        // not found
      } else {
        // other error
        console.log('error ::');
        console.log(error);
        throw error;
      }
    });*/
  }

  /**
   * Get a document by _id from database.
   * @param id Id of the document
   * @return The wanted document.
   */
  public getDocumentById(id: string) {
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
   * Update a document in database.
   * @param updatedDocument The updated document.
   * @return The newly updated document from database.s
   */
  public updateDocument(updatedDocument: any) {
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
