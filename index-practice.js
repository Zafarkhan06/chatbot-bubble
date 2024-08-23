// Inline your CSS
const style = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: #E3F2FD;
}
.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  right: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #724ae8;
  transition: all 0.2s ease;
}
body.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler span {
  color: #fff;
  position: absolute;
}
.chatbot-toggler span:last-child,
body.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 0;
}
body.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}
.chatbot {
  position: fixed;
  right: 35px;
  bottom: 90px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
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
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #724ae8;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem;
}
.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.chatbox .chat {
  display: flex;
  list-style: none;
}
.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}
.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: #724ae8;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}
.chatbox .chat p {
  padding: 12px 12px;
  border-radius: 10px 10px 0 10px;
  max-width: 85%;
  color: #fff;
  font-size: 0.95rem;
  background: #724ae8;
}
.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}
.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}
.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}
.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}
.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}
.chat-input span {
  align-self: flex-end;
  color: #724ae8;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}

@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }
  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }
  .chatbot .chat-input {
    padding: 5px 15px;
  }
  .chatbot header span {
    display: block;
  }
}
`;
document.addEventListener('DOMContentLoaded', () => {

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = style;
const markedScript = document.createElement('script');
markedScript.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
const addLinksToHead = () => {
  // Create and append the first link
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

document.head.appendChild(markedScript);
document.head.appendChild(styleSheet);
markedScript.onload= () => {
  console.log("marked.js loaded successfully!");
// Inject HTML structure
addLinksToHead();
const chatbotHTML = `
  <button class="chatbot-toggler">
    <span class="material-symbols-rounded">mode_comment</span>
    <span class="material-symbols-outlined">close</span>
  </button>
  <div class="chatbot">
    <header>
      <h2>Chatbot</h2>
      <span class="close-btn material-symbols-outlined">close</span>
    </header>
    <ul class="chatbox">
      <li class="chat incoming">
      </li>
    </ul>
    <div class="chat-input">
      <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
      <span id="send-btn" class="material-symbols-rounded">send</span>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// Your existing JavaScript logic
const chatbotToggler = document.querySelector('.chatbot-toggler');
const closeBtn = document.querySelector('.close-btn');
const chatbox = document.querySelector('.chatbox');
const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input span');
//console.log("checking parsing", marked("Hello **world**!"));
let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement('li');
  chatLi.classList.add('chat', `${className}`);
  let chatContent =
    className === 'outgoing'
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector('p').innerHTML = message;
  return chatLi;
};

const streamResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector('p');

  try {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    const response = await fetch('https://searchsafm.schoolafm.com/api/generate_response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers required by your API here
      },
      body: JSON.stringify({
        user_query: userMessage,
        user_id: "512", // Add user_id if necessary
        name:"",
        email: "",
        membership_level: "other",
        selected_rag: "Internal FAQs",
      }),
    });

    // Assuming the API sends data as text/event-stream
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let firstChunk = true;
    // Read the stream
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      if (firstChunk) {
        // Replace "Thinking..." with the first chunk
        messageElement.innerHTML = marked.parse(chunk);
        firstChunk = false;
      } else {
        // Append the subsequent chunks
        messageElement.innerHTML += marked.parse(chunk);
      }

      chatbox.scrollTo(0, chatbox.scrollHeight);
    }
  } catch (error) {
    console.error('Error fetching response:', error);
    messageElement.textContent = 'Sorry, something went wrong. Please try again.';
  }
};

const userId = 512; // Replace with the actual user ID
let pageNumber = 1;
let isFirstLoad = true; 

const fetchChatHistory = async (userId, pageNumber) => {
  try {
    const scrollHeightBeforeLoad = chatbox.scrollHeight;
    const response = await fetch('http://3.1.70.11:5000/api/get_chat_history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        page_number: pageNumber,
      }),
    });

    const data = await response.json();
    console.log('the chatbot history api is: ', data);
    if (data && data.chat_history) {
      data.chat_history.reverse().forEach((chat) => {
        if (chat.ai_response) {
          const botChatLi = createChatLi(chat.ai_response, 'incoming');
          
          chatbox.prepend(botChatLi);
          console.log('Bot reply added:', chat.ai_response);
        }
        // Display user message
        if (chat.user_message) {
          const userChatLi = createChatLi(chat.user_message, 'outgoing');
          chatbox.prepend(userChatLi);
        }

        // Display AI response
        
      });
      // Maintain scroll position
      if (isFirstLoad) {
        // Scroll to bottom if it's the first load
        chatbox.scrollTop = chatbox.scrollHeight;
        isFirstLoad = false; // Set flag to false after the first load
    } else {
        // Maintain scroll position for subsequent loads
        const scrollHeightBefore = chatbox.scrollHeight;
        chatbox.scrollTop = newScrollHeight - scrollHeightBeforeLoad;
    }
    }
  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

fetchChatHistory(userId, pageNumber);

chatbox.addEventListener('scroll', () => {
  if (chatbox.scrollTop === 0) {
    pageNumber++;
    fetchChatHistory(userId, pageNumber);
  }
});

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = '';
  chatInput.style.height = `${inputInitHeight}px`;
  chatbox.appendChild(createChatLi(userMessage, 'outgoing'));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  const incomingChatLi = createChatLi('Thinking...', 'incoming');
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Initiate the API call and stream the response
  streamResponse(incomingChatLi);
};

chatInput.addEventListener('input', () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener('click', handleChat);
closeBtn.addEventListener('click', () =>
  document.body.classList.remove('show-chatbot'),
);
chatbotToggler.addEventListener('click', () =>
  document.body.classList.toggle('show-chatbot'),
);
};
});