import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const KeyName in data) {
    if (data.hasOwnProperty(KeyName)) {
      if (data[KeyName] instanceof firebase.firestore.Timestamp) {
        data[KeyName] = data[KeyName].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getEventsFromFirestore(observer) {
  return db.collection("events").onSnapshot(observer);
}

export function listenToEventsFromFirestore() {
  return db.collection("events").orderBy("date");
}

export function listenToEventFromFirestore(eventId) {
  return db.collection("events").doc(eventId);
}
