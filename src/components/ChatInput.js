import React, { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = () => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    setMessage("");
  };

  return (
    <div className="bg-gray-800 px-8  py-2 rounded-md mt-auto">
      <form onSubmit={submit} className="flex justify-between">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border-none bg-transparent outline-none text-xl text-gray-200"
          placeholder="Message..."
          autoFocus={true}
        />
        <button className="p-2 bg-pink-600 rounded-md font-bold">send</button>
      </form>
    </div>
  );
};

export default ChatInput;
