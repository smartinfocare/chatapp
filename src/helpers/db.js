import { db } from "../services/firebase";

//getting the chat in real time
export function readChats() {
  let abc = [];
  db.ref("Sicschat").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}


// save the chat in real time 
export function writeChats(message) {
  return db.ref("Sicschat").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}
