const codeEditor = document.getElementById('code-editor');
const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('inpLock');
const darkModeButton = document.getElementById('dark-mode-button');

let isLocked = false; // Initially unlocked
let isDarkMode = false; // Initially in light mode

// Update the Lock/Unlock button's text
lockButton.textContent = 'Lock';

copyButton.addEventListener('click', () => {
  const codeToCopy = codeEditor.value;
  navigator.clipboard.writeText(codeToCopy).then(() => {
    alert('Code copied to clipboard!');
  });
});

saveButton.addEventListener('click', () => {
  // Implement your save functionality here
  alert('Code saved!');
});

lockButton.addEventListener('click', () => {
  isLocked = !isLocked;
  codeEditor.readOnly = isLocked;
  
  if (isLocked) {
    alert("Code Editor is locked")
  }
});

darkModeButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
});

codeEditor.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();

    // Get the current cursor position
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;

    // Insert a tab character
    const tab = "   "; // Two spaces for indentation
    codeEditor.value = codeEditor.value.substring(0, start) + tab + codeEditor.value.substring(end);

    // Set the cursor position after the inserted tab
    codeEditor.selectionStart = codeEditor.selectionEnd = start + tab.length;
  }
});
