import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "./init";

const db = getFirestore(app);

export async function retriveData(collactionName: string) {
  const snapshot = await getDocs(collection(db, collactionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retriveDataById(collactionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collactionName, id));

  const data = snapshot.data();
  return data;
}
