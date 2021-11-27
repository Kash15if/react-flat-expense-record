import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../firebase/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

// First, create the thunk
export const getAllData = createAsyncThunk("getAllData", async () => {
  var out = [];
  const q = await collection(db, "expense-details");
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return data;
});

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import db from "../firebase/firebaseConfig";
// import { collection, getDocs, onSnapshot } from "firebase/firestore";

// // First, create the thunk
// export const getAllData = createAsyncThunk("getAllData", async () => {
//   var out = [];
//   const q = await collection(db, "expense-details");

//   const unsubscribe = await onSnapshot(q, (querySnapshot) => {
//     const data = [];
//     querySnapshot.forEach((doc) => {
//       data.push(doc.id, ...doc.data());
//     });
//     out.push(data);
//   });

//   console.log(unsubscribe);
//   return unsubscribe;
// });
