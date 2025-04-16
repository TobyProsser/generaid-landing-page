import { firestore } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { IMessage } from "react-native-gifted-chat";

// Fetch messages in real-time
export const subscribeToMessages = (
  roomId: string,
  callback: (messages: any[]) => void
) => {
  const messagesRef = collection(firestore, "messages");
  const q = query(
    messagesRef,
    where("roomId", "==", roomId), // Use roomId to filter messages
    orderBy("createdAt", "desc") // Order messages by timestamp
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => {
      const firebaseData = doc.data();

      return {
        _id: doc.id,
        text: firebaseData.text,
        createdAt: firebaseData.createdAt.toDate(),
        user: firebaseData.user,
      };
    });
    callback(messages);
  });
};

// Send a message
export const sendMessage = async (roomId: string, message: IMessage) => {
  const messagesRef = collection(firestore, "messages");

  await addDoc(messagesRef, {
    text: message.text,
    createdAt: new Date(),
    user: message.user,
    roomId: roomId,
  });
};
