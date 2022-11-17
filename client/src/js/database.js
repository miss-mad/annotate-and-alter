import { openDB } from "idb";

const initdb = async () =>
  openDB("textEditor", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("textEditor")) {
        console.log("textEditor database already exists");
        return;
      }
      db.createObjectStore("textEditor", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("textEditor database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.error("putDb not implemented");
  const textEditorDb = await openDB("textEditor", 1);
  const transaction = textEditorDb.transaction("textEditor", "readwrite");
  const store = transaction.objectStore("textEditor");
  // insert data into put request
  const putRequest = store.put({ id: 1, value: content });
  const result = await putRequest;
  console.log("data updated in the database", result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");
  const textEditorDb = await openDB("textEditor", 1);
  const transaction = textEditorDb.transaction("textEditor", "readonly");
  const store = transaction.objectStore("textEditor");
  // const getAllRequest = store.getAll();
  const getAllRequest = store.get(1);
  const result = await getAllRequest;
  console.log("result.value", result.value);
  return result.value;
};

initdb();
