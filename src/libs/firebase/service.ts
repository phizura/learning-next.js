import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";
import { userData } from "@/types/user.type";

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

export async function signIn(userdata: { email: string }) {
  const collectionRef = collection(db, "users");
  // mencari apakah email sudah ada
  const q = query(collectionRef, where("email", "==", userdata.email));

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) return data[0];
  return null;
}

export async function signUp(
  userdata: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const collectionRef = collection(db, "users");
  // mencari apakah email sudah ada
  const q = query(collectionRef, where("email", "==", userdata.email));

  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false, message: "Email sudah terdaftar" });
  } else {
    userdata.password = await bcrypt.hash(userdata.password, 10);
    userdata.role = "member";
    await addDoc(collectionRef, userdata)
      .then(() => {
        callback({ status: true, message: "Success" });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
}

export async function signInWithGoogle(userData: userData, callback: any) {
  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("email", "==", userData.email));

  const snapshot = await getDocs(q);

  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(db, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          data: userData,
        });
      })
      .catch(() => {
        callback({ status: false, message: "Sign In With Google Failed" });
      });
  } else {
    userData.role = "member";
    await addDoc(collectionRef, userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          data: userData,
        });
      })
      .catch(() => {
        callback({ status: false, message: "Sign In With Google Failed" });
      });
  }
}
