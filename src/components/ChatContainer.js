import React, { useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../config/firebase";

const ChatContainer = () => {
  const [messages] = useCollection(
    db.collection("messages").orderBy("timestamp", "asc")
  );
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex-1 py-3 px-6 flex flex-col">
      <div className="overflow-y-scroll">
        {messages?.docs.map((doc) => {
          return <Message key={doc.id} message={doc.data()} />;
        })}
        <div ref={messagesEndRef} />
      </div>
      <br />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
