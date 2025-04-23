import React, { useState } from 'react';
import { Send, Mic, MapPin, Calendar, Coffee } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const QUICK_SUGGESTIONS = [
  { icon: <MapPin className="w-4 h-4 mr-1" />, text: "Check in details" },
  { icon: <Coffee className="w-4 h-4 mr-1" />, text: "Best restaurants nearby?" },
  { icon: <Calendar className="w-4 h-4 mr-1" />, text: "Beach activities today?" },
  ];

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (!isLoading) {
      onSendMessage(suggestion);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      {showSuggestions && (
        <div className="mb-3 flex flex-wrap gap-2">
          {QUICK_SUGGESTIONS.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion.text)}
              className="flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              {suggestion.icon}
              {suggestion.text}
            </button>
          ))}
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <textarea
            className="w-full rounded-2xl border border-gray-300 pl-4 pr-10 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none disabled:opacity-50"
            placeholder="Ask me anything about your stay..."
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-700 hover:text-purple-800 disabled:opacity-50"
            disabled={!message.trim() || isLoading}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <button 
          className="rounded-full bg-purple-100 p-3 text-purple-700 hover:bg-purple-200 transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          <Mic className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;