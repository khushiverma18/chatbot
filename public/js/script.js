const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const API_URL = 'http://127.0.0.1:8080/products';

sendBtn.addEventListener('click', async () => {
    const query = chatInput.value;
    if (!query.trim()) return;

    addMessage(`You: ${query}`, 'user');
    chatInput.value = '';

    try {
        const response = await fetch(`${API_URL}?query=${query}`);
        const products = await response.json();

        if (products.length) {
            const message = products.map(p => `${p.name} - $${p.price}`).join('\n');
            addMessage(`Bot: Here are some products:\n${message}`, 'bot');
        } else {
            addMessage('Bot: No products found.', 'bot');
        }
    } catch (err) {
        addMessage('Bot: Something went wrong.', 'bot');
    }
});

function addMessage(message, sender) {
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    msgElement.className = sender;
    chatMessages.appendChild(msgElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function openLogin() {
    document.getElementById("loginPopup").style.display = "grid";
    document.getElementById("signupPopup").style.display = "none";
  }

  function openSignup() {
    document.getElementById("signupPopup").style.display = "grid";
    document.getElementById("loginPopup").style.display = "none";
  }

  function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("signupPopup").style.display = "none";
  }