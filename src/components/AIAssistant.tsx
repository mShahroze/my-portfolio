'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const RobotIcon = ({
  className = 'w-6 h-6',
}: {
  className?: string;
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c.55 0 1 .45 1 1v1h2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2V3c0-.55.45-1 1-1zm0 4c-2.21 0-4 1.79-4 4v6h8v-6c0-2.21-1.79-4-4-4zm-2 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
);

const CloseIcon = ({
  className = 'w-5 h-5',
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SendIcon = ({
  className = 'w-4 h-4',
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your portfolio assistant. I can help you learn about Muhammad's experience, projects, and skills. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What are Muhammad's main skills?",
    'Show me recent projects',
    "What's his experience with React?",
    'How can I contact him?',
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: getSimulatedResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const getSimulatedResponse = (question: string): string => {
    const q = question.toLowerCase();

    if (q.includes('skill') || q.includes('technology')) {
      return "Muhammad specializes in:\n• React.js & Next.js for modern web applications\n• TypeScript for type-safe development\n• Node.js for backend services\n• Tailwind CSS for responsive design\n• PostgreSQL & MongoDB databases\n\nHe's particularly strong in full-stack development and has experience with CI/CD pipelines and cloud deployment.";
    }

    if (q.includes('project')) {
      return "Muhammad has worked on several impressive projects:\n\n1. **Gazetter** - An interactive map application using JavaScript, jQuery, and PHP\n2. **Company Directory** - A full CRUD application for personnel management\n\nHe's constantly building new projects. Would you like to see more details about any specific project?";
    }

    if (q.includes('react') || q.includes('frontend')) {
      return "Muhammad has extensive React experience including:\n• React Hooks for state management\n• Custom component libraries\n• Performance optimization\n• Integration with REST APIs\n• Testing with Jest and React Testing Library\n\nHe's been working with React professionally and keeps up with the latest features like Server Components.";
    }

    if (q.includes('contact') || q.includes('reach')) {
      return 'You can reach Muhammad through:\n• The contact form on this website\n• LinkedIn (check the footer links)\n• GitHub for technical discussions\n\nHe typically responds within 24 hours. Would you like me to help you draft a message?';
    }

    if (q.includes('experience') || q.includes('work')) {
      return 'Muhammad is a Software Engineer with experience in:\n• Full Software Development Life Cycle\n• Agile/Scrum methodologies\n• Team collaboration and code review\n• Project management\n• Mentorship and technical leadership\n\nHe thrives in fast-paced environments and loves learning new technologies.';
    }

    return "I'd be happy to help you learn more about Muhammad's portfolio! You can ask me about his skills, projects, experience, or how to get in touch. What interests you most?";
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <RobotIcon />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <RobotIcon className="w-8 h-8" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Portfolio Assistant
                  </h3>
                  <p className="text-blue-100 text-xs">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.role === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {msg.content}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.role === 'user'
                          ? 'text-blue-100'
                          : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Quick questions:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-left transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' && handleSend()
                  }
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
