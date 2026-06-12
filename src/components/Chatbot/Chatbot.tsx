"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { IoChatbubbles, IoClose, IoSend } from "react-icons/io5";

export default function Chatbot() {
  const t = useTranslations("chatbot");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: t("welcome"), isBot: true },
  ]);

  const questions = [
    { id: "birth_cert", label: t("questions.birth_cert") },
    { id: "death_cert", label: t("questions.death_cert") },
    { id: "office_hours", label: t("questions.office_hours") },
    { id: "contact", label: t("questions.contact") },
    { id: "water_tax", label: t("questions.water_tax") },
    { id: "property_tax", label: t("questions.property_tax") },
    { id: "schemes", label: t("questions.schemes") },
    { id: "gram_sabha", label: t("questions.gram_sabha") },
  ];

  const handleQuestionClick = (id: string, label: string) => {
    setMessages((prev) => [...prev, { text: label, isBot: false }]);
    
    // Simulate delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: t(`answers.${id}` as any), isBot: true }]);
    }, 500);
  };

  return (
    <>
      <div className="chatbot-btn" onClick={() => setIsOpen(true)}>
        <IoChatbubbles size={30} />
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header flex justify-between items-center">
            <span className="flex items-center gap-2">
              <IoChatbubbles size={20} /> Gram Panchayat Assistant
            </span>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <IoClose size={24} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.isBot ? "chatbot-msg-bot" : "chatbot-msg-user"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-questions">
            {questions.map((q) => (
              <button
                key={q.id}
                className="chatbot-question-btn"
                onClick={() => handleQuestionClick(q.id, q.label)}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
