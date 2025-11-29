import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Chat() {
  const doctorReplies = [
    "Good Morning! How How are you feeling today?",
    "I appreciate your patience. Let me check that for you.",
    "Please provide more details so I can assist you better.",
    "Is there anything else you would like to know?",
    "Feel free to ask any questions you may have.",
    "I'm here to help with any concerns you have.",
    "Hope the baby is kicking well! Let me know if you need anything else.",
    "Remember to stay hydrated and take your prenatal vitamins.",
  ];

  const [replyIndex, setReplyIndex] = useState(0);
  const [messages, setMessages] = useState([
    { id: 1, sender: "doctor", text: "Hello, how can I assist you today?" },
  ]);

  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);
  const chatEndRef = useRef(null);

  // Smooth scroll to the bottom whenever new message appears
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Auto reply after 2 sec
    setTimeout(() => {
      const nextReply = doctorReplies[replyIndex];

      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "doctor", text: nextReply },
      ]);

      if (replyIndex + 1 < doctorReplies.length) {
        setReplyIndex((prev) => prev + 1);
      }
    }, 2000);
  };

  return (
    <div className="mt-10 flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-0 md:ml-72 p-4 flex flex-col">
        <TopBar />

        <div className="mt-6 flex flex-col h-[calc(100vh-120px)]">
          <div className="flex flex-row bg-white shadow rounded p-4 text-lg font-bold text-teal-600">
            Live Chat Support
          </div>

          {/* Chat window */}
          <div
            ref={chatWindowRef}
            className="flex-1 bg-white mt-4 p-4 rounded shadow overflow-y-auto scroll-smooth"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`my-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg transition-all duration-200 ${
                    msg.sender === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
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
              className="px-4 bg-teal-600 text-white rounded-lg transition-all duration-200 hover:bg-teal-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
