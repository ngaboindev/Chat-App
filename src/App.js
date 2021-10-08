import React from "react";
import Sidebar from "./components/Sidebar";
import ChatContainer from "./components/ChatContainer";
import Login from "./components/Login";
import Loader from "./components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="bg-gray-900 h-screen flex justify-between">
      {loading && <Loader />}
      {!user && <Login />}
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default App;
