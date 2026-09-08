import ChatSidebar from "./ChatSidebar";

import ChatWindow from "./ChatWindow";

import OnlineUsers from "./OnlineUsers";

function TeamChat() {
  return (
    <div className="team-chat-layout">

      <ChatSidebar />

      <ChatWindow />

      <OnlineUsers />

    </div>
  );
}

export default TeamChat;