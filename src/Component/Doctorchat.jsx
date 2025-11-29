import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function ChatPage() {
  const doctors = [
    { id: 1, name: "Dr. Fareed Habeeb", specialty: "Obstetrician & Gynecologist", image: "/DHS 1.jpg" },
    { id: 2, name: "Dr. Deborah Alade", specialty: "Pediatrician", image: "/MD1.jpg" },
    { id: 3, name: "Dr. Emmanuel Opeyemi", specialty: "Cardiologist", image: "/S4.jpg" },
    { id: 4, name: "Dr. Mayowa Oladipo", specialty: "Dermatologist", image: "/D4.jpg" },
    { id: 5, name: "Dr. Grace Nwankwo", specialty: "Neurologist", image: "/MD6.jpg" },
    { id: 6, name: "Dr. Mercy Ajayi", specialty: "Neurologist", image: "/MD3.jpg" }
  ];

  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const filteredDoctors = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const chatWindowRef = useRef(null);
  const fileInputRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      text: "Hello, how can I assist you today?",
      time: "09:10 AM",
      type: "text",
    },
  ]);

  const [input, setInput] = useState("");

  // 🎤 AUDIO RECORDING
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const addMessage = (content) => {
    const msg = {
      id: messages.length + 1,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      ...content,
    };
    setMessages((prev) => [...prev, msg]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    addMessage({ type: "text", text: input });
    setInput("");
    doctorAutoReply();
  };

  const doctorAutoReply = () => {
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: "doctor",
        text: "Thank you for the message, I’m checking it now.",
        type: "text",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  // 🎤 Start Audio Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
        const url = URL.createObjectURL(blob);

        addMessage({ type: "audio", audio: url });
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      alert("Microphone permission denied.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  // 📁 FILE UPLOAD
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      addMessage({ type: "image", imageURL: url });
    } else {
      addMessage({ type: "file", fileName: file.name, fileURL: url });
    }
    doctorAutoReply();
  };

  return (
    <div className="mt-10 flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-0 md:ml-72 p-4">
        <TopBar />

        <div className="mt-6 flex flex-col md:flex-row h-[calc(100vh-120px)] gap-4">
          
          {/* DOCTOR LIST */}
          <div className="md:w-1/3 bg-white shadow rounded p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-teal-600 mb-4">Doctors</h2>

            <input
              type="text"
              placeholder="Search doctors…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 mb-4 rounded border border-teal-600"
            />

            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoctor(doc)}
                className={`flex items-center p-3 mb-3 rounded cursor-pointer ${
                  selectedDoctor.id === doc.id ? "bg-teal-600 text-white" : "bg-gray-100"
                }`}
              >
                <img src={doc.image} className="w-12 h-12 rounded-full border-2 border-teal-600" />
                <div className="ml-3">
                  <p className="font-bold">{doc.name}</p>
                  <p className="text-sm opacity-80">{doc.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 bg-white shadow rounded flex flex-col">

            {/* CHAT HEADER */}
            <div className="p-4 flex items-center border-b">
              <img src={selectedDoctor.image} className="w-12 h-12 rounded-full border-2 border-teal-600" />
              <div className="ml-3">
                <p className="font-bold text-teal-600 text-lg">{selectedDoctor.name}</p>
                <p className="text-sm text-gray-500">{selectedDoctor.specialty}</p>
              </div>
            </div>

            {/* CHAT MESSAGES */}
            <div ref={chatWindowRef} className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`my-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg shadow ${
                      msg.sender === "user" ? "bg-teal-600 text-white" : "bg-white"
                    }`}
                  >
                    {msg.type === "text" && <p>{msg.text}</p>}
                    {msg.type === "image" && <img src={msg.imageURL} className="w-40 rounded" />}
                    {msg.type === "audio" && <audio controls src={msg.audio} className="w-full"></audio>}
                    {msg.type === "file" && (
                      <a href={msg.fileURL} download className="underline text-sm">
                        📄 {msg.fileName}
                      </a>
                    )}
                    <p className="text-xs mt-1 opacity-70 text-right">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT AREA */}
            <div className="p-4 border-t flex items-center gap-2">
              {!isRecording ? (
                <button onClick={startRecording} className="bg-black text-white px-4 py-2 rounded">
                  🎤
                </button>
              ) : (
                <button onClick={stopRecording} className="bg-red-600 text-white px-4 py-2 rounded">
                  ⏹
                </button>
              )}

              <button
                onClick={() => fileInputRef.current.click()}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                📎
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />

              <input
                type="text"
                className="flex-1 p-3 rounded border"
                placeholder="Type message…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button onClick={sendMessage} className="px-4 bg-teal-600 text-white rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
