const style = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.chatbot-toggler {
  position: fixed !important;
  bottom: 20px !important;
  right: 25px !important;
  outline: none !important;
  border: none !important;
  height: 60px !important;
  width: 60px !important;
  display: flex !important;
  cursor: pointer !important;
  align-items: center !important;
  justify-content: center; 
  border-radius: 50%;
  background: #16525C !important;
  transition: all 0.2s ease;
  z-index: 99999999999999999;
}
body.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler span {
  color: #fff !important;
  position: absolute !important;
}
.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 0;
}
body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}
.chatbot {
z-index: 99999999999999999;
  position: fixed;
  right: 30px !important;
  bottom: 90px !important;
  width: 460px !important;
  background: #fff !important;
  border-radius: 15px !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
              0 32px 64px -48px rgba(0,0,0,0.5);
  transition: all 0.1s ease;
}
body.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.chatbot header {
  padding: 10px 0;
  position: relative;
  text-align: center;
  color: #fff !important;
  background: #16525C !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.chatbot header span {
  position: absolute !important;
  right: 15px !important;
  top: 50% !important;
  display: none ;
  cursor: pointer !important;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem !important;
  color: white !important;
}
.chatbot .chatbox {
  overflow-y: auto !important;
  height: 73dvh !important;
  padding: 30px 20px 100px 0px !important;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px !important;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff !important;
  border-radius: 25px !important;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc !important;
  border-radius: 25px !important;
}
.chatbox .chat {
  display: flex !important;
  list-style: none !important;
}
.chatbox .outgoing {
  margin: 20px 0 !important;
  justify-content: flex-end !important;
  
}
 .chatbox .incoming span {
   width: 32px !important;
   height: 32px !important;
   cursor: default;
   line-height: 32px !important;
   align-self: flex-end !important;
   margin-right: 10px !important;
   text-align: center !important;
  line-height: 32px !important;
  align-self: flex-end !important;
  background: #16525C !important;
  border-radius: 4px !important;
 }
.chatbox .incoming .img1{
   width: 32px !important;
   height: 32px !important;
  margin-right:10px !important;
  cursor: default !important;
  }

.chatbox .chat p {
  padding: 8px 8px !important;
  border-radius: 10px 10px 0 10px !important;
  max-width: 100% !important;
  color:#000 !important;
  font-size: 0.95rem !important;
  background: #f2f2f2 !important;
}

 .hello p {
  min-width: 95% !important;
  padding: 0px !important}
  .hi p {
  min-width: "90%" !important;}

.chatbox .incoming p {
  border-radius: 10px 10px 10px 0 !important;
  word-wrap: break-word !important;
   min-width: 40% !important; 
}
.chatbox .incoming p ol {
padding-left: 30px !important;
}
.chatbox .chat p.error {
  color: #721c24 !important;
  background: #f8d7da !important;
}
.chatbox .incoming p {
  color: white !important;
  background: #16525C !important;
}
.chatbot .chat-input {
  display: flex !important;
  gap: 5px !important;
  position: absolute !important;
  bottom: 0 !important;
  width: 100% !important;
  background: #fff !important;
  padding: 1px 20px !important;
  border-top: 1px solid #ddd !important;
}
.chat-input textarea {
  height: 55px !important;
  width: 100% !important;
  border: none !important;
  outline: none !important;
  resize: none !important;
  max-height: 180px !important;
  padding: 10px 15px 10px 0 !important;
  font-size: 0.95rem !important;
  color: black !important
}
.chat-input textarea::placeholder {
  color: black !important;
  }
.chat-input span {
  align-self: flex-end !important;
  color: #16525C !important;
  cursor: pointer !important;
  height: 55px !important;
  display: flex !important;
  align-items: center !important;
  font-size: 2.20rem !important; 
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}


@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px !important;
    bottom: 20px !important;
  }
  .chatbot {
    right: 0 !important;
    bottom: 0 !important;
    height: 100% !important;
    border-radius: 0 !important;
    width: 100% !important;
  }
  .chatbot .chatbox {
    height: 90% !important;
    padding: 25px 15px 100px 0px !important;
  }
  .chatbot .chat-input {
    padding: 5px 15px !important;
  }
  .chatbot header span {
    display: block !important;
  }
    .img{
    width:60px !important; 
    height:60px !important 
    }
}
`;
document.addEventListener('DOMContentLoaded', () => {

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = style;
  
    const showdownScript = document.createElement('script');
    showdownScript.src = "https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js";
  
    const addLinksToHead = () => {
      const link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0';
  document.head.appendChild(link1);

  // Create and append the second link
  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0';
  document.head.appendChild(link2);
    };
  
    document.head.appendChild(showdownScript);
    document.head.appendChild(styleSheet);
  
    showdownScript.onload = () => {
      console.log("Showdown.js loaded successfully!");
      const converter = new showdown.Converter();
      addLinksToHead();
  
      const chatbotHTML = `
        <button class="chatbot-toggler">
          <span class="material-symbols-rounded"><img src="https://drol7z533heis.cloudfront.net/ML.svg" class="img"></span>
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="chatbot">
          <header>
            <h2> LifeMed Assistant</h2>
            <span class="close-btn material-symbols-outlined">close</span>
          </header>
          <ul class="chatbox">
          </ul>
          <div class="chat-input">
            <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
            <span id="send-btn" class="material-symbols-rounded">send</span>
          </div>
        </div>
      `;
  
      document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  
      const chatbotToggler = document.querySelector('.chatbot-toggler');
      const closeBtn = document.querySelector('.close-btn');
      const chatbox = document.querySelector('.chatbox');
      const chatInput = document.querySelector('.chat-input textarea');
      const sendChatBtn = document.querySelector('.chat-input span');
  
      let userMessage = null;
      const inputInitHeight = chatInput.scrollHeight;
  
    //   const getUserId = () => {
    //     let userId = localStorage.getItem('userId');
    //     if (!userId) {
    //       userId = crypto.randomUUID ? crypto.randomUUID() : `user_${Math.random().toString(36).substr(2, 9)}`;
    //       localStorage.setItem('userId', userId);
    //     }
    //     return userId;
    //   };
      // UUID generation function using crypto API
    function generateUUID() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
      // Generate or retrieve user ID
      let userId = localStorage.getItem('user_id');
      if (!userId) {
        userId = generateUUID();
        localStorage.setItem('user_id', userId);
    }
  
      // Load chat history from local storage
      let chatHistory = JSON.parse(localStorage.getItem('chat_history')) || [];
  
      const saveChatHistory = () => {
        localStorage.setItem('chat_history', JSON.stringify(chatHistory));
      };
  
      const createChatLi = (message, className) => {
        const chatLi = document.createElement('li');
        chatLi.classList.add('chat', className);
        let chatContent = className === 'outgoing'
          ? `<p class="hello"></p>`
          : `
          <div>
          LifeMed Assistant:
          <p class="hi"></p></div>
          `;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector('p').innerHTML = converter.makeHtml(message);
        return chatLi;
      };
  
      const renderChatHistory = () => {
        chatHistory.forEach((chat) => {
          const chatClass = chat.isUser ? 'outgoing' : 'incoming';
          const chatLi = createChatLi(chat.message, chatClass);
          chatbox.appendChild(chatLi);
        });
        chatbox.scrollTo(0, chatbox.scrollHeight);
      };
  
      renderChatHistory();
  
      const streamResponse = async (chatElement) => {
        const messageElement = chatElement.querySelector('p');
        let fullResponse = '';
  
        try {
          const response = await fetch('https://4vfumfuhi4.us-east-1.awsapprunner.com/api/chatbot/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              question: userMessage,
              //history: chatHistory,
              user_id: userId,
            }),
          });
  
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
  
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
  
            const chunk = decoder.decode(value, { stream: true });
            fullResponse += chunk;
            messageElement.textContent = fullResponse;
            chatbox.scrollTo(0, chatbox.scrollHeight);
          }
  
          chatHistory.push({ message: fullResponse, isUser: false });
          saveChatHistory();
          messageElement.innerHTML = converter.makeHtml(fullResponse);
        } catch (error) {
          console.error('Error fetching response:', error);
          messageElement.textContent = 'Sorry, something went wrong. Please try again.';
        }
      };
  
      const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;
  
        chatInput.value = '';
        chatInput.style.height = `${inputInitHeight}px`;
  
        const userChatLi = createChatLi(userMessage, 'outgoing');
        chatbox.appendChild(userChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
  
        chatHistory.push({ message: userMessage, isUser: true });
        saveChatHistory();
  
        const incomingChatLi = createChatLi('Thinking...', 'incoming');
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
  
        streamResponse(incomingChatLi);
      };
  
      chatInput.addEventListener('input', () => {
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
      });
  
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleChat();
        }
      });
  
      sendChatBtn.addEventListener('click', handleChat);
  
      closeBtn.addEventListener('click', () => document.body.classList.remove('show-chatbot'));
      chatbotToggler.addEventListener('click', () => document.body.classList.toggle('show-chatbot'));
    };
  });