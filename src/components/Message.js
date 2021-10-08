import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="flex items-center py-2 my-2 space-x-2">
        {/* user image */}
        <img
          className="w-12 h-12 rounded-full"
          src={message.userImage}
          alt="user"
        />
        <h3 className="text-gray-300 text-xl font-semibold">{message.user}</h3>
        <p className="text-gray-500 text-md">
          {new Date(message.timestamp?.toDate()).toUTCString()}
        </p>
      </div>
      <div className="bg-gray-800 p-3 rounded-sm mx-2 shadow-sm text-gray-300 font-semibold  border-l-4 border-pink-800">
        {/* Message */}
        {message.message}
      </div>
    </div>
  );
};

export default Message;
