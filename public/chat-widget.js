// Simple AI Chat Widget with Hugging Face model
(function() {
  // Inject Tailwind CSS
  if (!document.querySelector('link[href*="tailwindcss"]')) {
    const tailwind = document.createElement('link');
    tailwind.rel = 'stylesheet';
    tailwind.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    document.head.appendChild(tailwind);
  }

  // Inject custom CSS
  const style = document.createElement('style');
  style.textContent = `
    .chat-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
    .chat-bubble {
      width: 56px;
      height: 56px;
      background: #1f2937;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .chat-bubble:hover {
      transform: scale(1.1);
    }
    .chat-popup {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      display: none;
      flex-direction: column;
    }
    .chat-header {
      background: #1f2937;
      color: white;
      padding: 16px;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chat-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }
    .chat-input-container {
      padding: 16px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      gap: 8px;
    }
    .chat-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #d1d5db;
      border-radius: 20px;
      outline: none;
    }
    .chat-submit {
      padding: 8px 16px;
      background: #1f2937;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }
    .message {
      max-width: 80%;
      margin-bottom: 8px;
      padding: 8px 12px;
      border-radius: 12px;
      line-height: 1.4;
    }
    .message.user {
      align-self: flex-end;
      background: #1f2937;
      color: white;
    }
    .message.bot {
      align-self: flex-start;
      background: #f3f4f6;
      color: #111827;
    }
    .hidden {
      display: none;
    }
    @media (max-width: 640px) {
      .chat-popup {
        width: 90vw;
        max-width: 350px;
      }
    }
  `;
  document.head.appendChild(style);

  // Create widget elements
  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <div class="chat-bubble">
      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    </div>
    <div class="chat-popup">
      <div class="chat-header">
        <h3 class="text-lg font-semibold">AI Chat</h3>
        <button class="close-popup text-xl">&times;</button>
      </div>
      <div class="chat-messages"></div>
      <div class="chat-input-container">
        <input type="text" class="chat-input" placeholder="Ask me anything...">
        <button class="chat-submit">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  // Elements
  const bubble = widget.querySelector('.chat-bubble');
  const popup = widget.querySelector('.chat-popup');
  const input = widget.querySelector('.chat-input');
  const submitBtn = widget.querySelector('.chat-submit');
  const messagesContainer = widget.querySelector('.chat-messages');
  const closeBtn = widget.querySelector('.close-popup');

  // Toggle popup
  bubble.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
    if (popup.style.display === 'flex') {
      input.focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Send message
  function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'message bot';
    typing.textContent = 'Thinking...';
    messagesContainer.appendChild(typing);

    // Call OpenAI API via proxy
    fetch('http://localhost:3001/api/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
        max_tokens: 150
      })
    })
    .then(response => response.json())
    .then(data => {
      typing.remove();
      if (data && data.choices && data.choices[0] && data.choices[0].message) {
        addMessage(data.choices[0].message.content, 'bot');
      } else {
        addMessage('Sorry, I couldn\'t generate a response.', 'bot');
      }
    })
    .catch(error => {
      typing.remove();
      addMessage('Sorry, there was an error.', 'bot');
      console.error(error);
    });
  }

  submitBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function addMessage(text, sender) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${sender}`;
    messageEl.textContent = text;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

})();
