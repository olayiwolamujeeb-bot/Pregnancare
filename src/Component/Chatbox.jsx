import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "doctor", text: "Hello, how can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll 
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");

    // Optional auto-response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 8,
          sender: "doctor",
          text: "Thanks for the message. We’ll get back to you shortly.",
          text: "Thank you for reaching out. How can I help you further?",
          text: "I appreciate your patience. Let me check that for you.",
          text: "Please provide more details so I can assist you better.",
          text: "Is there anything else you would like to know?",
          text: "Feel free to ask any questions you may have.",
          text: "I'm here to help with any concerns you have.",
          text: "Hope the baby is kicking well! Let me know if you need anything else.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="mt-10 flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-72 p-4 flex flex-col">
        {/* TopBar */}
        <TopBar />

        <div className="mt-6 flex flex-col h-[calc(100vh-120px)]">
          {/* Header */}
          <div className="bg-white shadow rounded p-4 text-lg font-bold text-teal-600">
            Live Chat Support
          </div>

          {/* Chat Window */}
          <div className="flex-1 bg-white mt-4 p-4 rounded shadow overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`my-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              className="flex-1 p-3 rounded-lg border border-teal-700 focus:outline-teal-600"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="px-4 bg-teal-600 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
