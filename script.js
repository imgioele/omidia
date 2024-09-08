const typing = document.querySelector('.typing');
const textArray = ['web marketing', 'sviluppo web', 'seo', 'google ads', 'meta ads', 'linkedin ads'];
let typingIndex = 0;
let currentString = '';
let charIndex = 0;

function type() {
  if (charIndex <= textArray[typingIndex].length) {
    currentString = textArray[typingIndex].substring(0, charIndex);
    typing.textContent = currentString;
    charIndex++;
    setTimeout(type, 50);
  } else {
    charIndex = 0;
    typingIndex++;
    if (typingIndex >= textArray.length) typingIndex = 0;
    setTimeout(type, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
