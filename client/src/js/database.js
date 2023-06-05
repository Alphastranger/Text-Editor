import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
  {
    const jateDb = await openDB('jate-db', 1);
    const tx = jateDb.transaction('textedit', 'readwrite');
    const store = tx.objectStore('textedit')
    const request = store.add({text: content})
    const result = await request
    console.log('Works, chief', result)
    if (err) {
    console.error('putDb not implemented')
  }
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const getJateDb = await openDB ('jate-db', 1);
  const tx = getJateDb.transaction('jate-db', 'readonly');
  const store = tx.objectStore('jate-db');
  const request = store.getAll();
  const result = await request;
  if (err){
  console.error('getDb not implemented')
}
return result;
};

initdb();
