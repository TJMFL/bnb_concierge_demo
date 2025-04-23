import React from 'react';
import ChatContainer from '../components/ChatContainer';

const ChatPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      <ChatContainer 
        guestName="Demo Guest"
        propertyName="Luxury Beachfront Villa"
      />
    </div>
  );
};

export default ChatPage;