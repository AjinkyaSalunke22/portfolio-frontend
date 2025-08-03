import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [provider, setProvider] = useState('gemini');
  const [model, setModel] = useState('gemini-1.5-flash');
  const chatRef = useRef(null);

  const demoQuestions = [
    "What are Ajinkya's technical skills?",
    "Tell me about Ajinkya's work experience",
    "What is Ajinkya's graduation college?",
    "Which projects has Ajinkya worked on?",
    "What programming languages does Ajinkya know?",
    "Does Ajinkya have cloud experience?"
  ];

  // Load knowledge base and API key when chatbot opens
  useEffect(() => {
    if (isOpen && !knowledgeBase) {
      loadChatbotData();
    }
  }, [isOpen]);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target) && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const loadChatbotData = async () => {
    try {
      const [knowledgeRes, apiKeyRes] = await Promise.all([
        fetch('https://portfolio-backend-okze.onrender.com/api/knowledge'),
        fetch('https://portfolio-backend-okze.onrender.com/api/apikey')
      ]);
      
      const knowledgeData = await knowledgeRes.json();
      const apiKeyData = await apiKeyRes.json();
      
      setKnowledgeBase(knowledgeData.content || '');
      setApiKey(apiKeyData.apiKey || '');
      setProvider(apiKeyData.provider || 'gemini');
      setModel(apiKeyData.model || 'gemini-1.5-flash');
    } catch (error) {
      console.error('Failed to load chatbot data:', error);
    }
  };

  const callAI = async (prompt) => {
    if (provider === 'gemini') {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    } else if (provider === 'claude') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await response.json();
      return data.content?.[0]?.text;
    } else if (provider === 'deepseek') {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await response.json();
      return data.choices?.[0]?.message?.content;
    }
    return null;
  };

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      if (!apiKey) {
        const botMessage = { type: 'bot', content: 'Chatbot is not configured properly.' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
        return;
      }

      if (!knowledgeBase.trim()) {
        const botMessage = { type: 'bot', content: 'Please only ask questions related to Ajinkya\'s portfolio.' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
        return;
      }

      const prompt = `You are Ajinkya Salunke's portfolio assistant. Here is the knowledge base:\n\n${knowledgeBase}\n\nUser Question: ${message}\n\nInstructions: Check if the answer to the user's question exists in the knowledge base above. If YES, provide a short, accurate answer based only on the information given. If NO, respond exactly with: "Please only ask questions related to Ajinkya's portfolio."`;

      const answer = await callAI(prompt) || 'Please only ask questions related to Ajinkya\'s portfolio.';
      const botMessage = { type: 'bot', content: answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { type: 'bot', content: 'Please only ask questions related to Ajinkya\'s portfolio.' };
      setMessages(prev => [...prev, errorMessage]);
    }
    
    setIsLoading(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setInput('');
  };

  return (
    <>
      {/* Chat Icon */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            <div 
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="absolute -top-10 -left-20 bg-gray-800 bg-opacity-70 text-gray-200 px-2 py-1 rounded-lg text-xs whitespace-nowrap animate-pulse">
              🔍 Quick Portfolio Search
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border border-gray-100 flex flex-col z-50 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100 origin-bottom-right' : 'scale-0 opacity-0 pointer-events-none origin-bottom-right'}`} ref={chatRef}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-bold">Aj's AI Bot</h3>
            <button onClick={handleClose} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-600">
                <p className="mb-3">Hi! I'm Aj's AI Bot. Ask me anything about Ajinkya's portfolio!</p>
                <div className="space-y-1">
                  {demoQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(question)}
                      className="block w-full text-left p-2 bg-blue-100 text-blue-800 rounded-lg text-xs hover:bg-blue-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask about Ajinkya's portfolio..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}